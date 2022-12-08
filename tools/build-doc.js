const fs = require('fs');
const path = require('path');


async function getDir(dir) {
    return await fs.promises.readdir(dir);
}

async function readFile(base, dir, file) {
    const content = await fs.promises.readFile(`${base + dir}/${file}`) + '';
    const name = content.split('\n')[1].split('.')[1];
    return {name, dir, file};
}

async function buildDirectory(src,lang, dir) {
    const pagesDir = `${src}pages/`;
    const files = await getDir(pagesDir + lang + dir);
    const contents = await Promise.all(files.map(file => readFile(pagesDir, lang + dir, file)));
    return contents.map(({name: text, dir, file}) => ({text, link: `${dir}/${path.parse(file).name}`}));
}

async function buildConfig(src,lang, dir) {
    return buildDirectory(src,`${lang}/`, dir);
}

async function writeConfig(src,lang) {
    fs.promises.writeFile(`${src}config-menu.ts`, `/*
This file is auto-generated.
*/
export default ${JSON.stringify({
        en:
            {
                'array operators': await buildConfig(src,lang, 'array/operator'),
                'sequence operators': await buildConfig(src,lang, 'seq/operator'),
                'sequence generators': await buildConfig(src,lang, 'seq/generator'),
            }
    }, null, '  ')}`);
}

async function buildMenu() {
    const src = './docs/src/';
    await writeConfig(src,'en');
}

async function buildIntroduction() {

    const content = await fs.promises.readFile('./README.md') + '';
    const header = `---
description: Docs intro
layout: ../../layouts/MainLayout.astro
---`;
    await fs.promises.writeFile('./docs/src/pages/en/introduction.md', header + content);
}


(async () => {
    await buildIntroduction();
    await buildMenu();
})();
