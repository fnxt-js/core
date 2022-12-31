const fs = require('fs');
const path = require('path');



async function buildDirectory(src, lang, dir) {
    const pagesDir = `${src}pages/`;
    const files = await fs.promises.readdir(pagesDir + lang + dir);
    const contents = files.map(file => ({dir: lang + dir, file, name: file.split('.')[0]}));
    return contents.map(({name: text, dir, file}) => ({text, link: `${dir}/${path.parse(file).name}`}));
}

async function buildConfig(src, lang, dir) {
    return buildDirectory(src, `${lang}/`, dir);
}

async function writeConfig(src, lang) {
    fs.promises.writeFile(`${src}config-menu.ts`, `/*
This file is auto-generated.
*/
export default ${JSON.stringify({
        en:
            {
                'array operators': await buildConfig(src, lang, 'array/operator'),
                'array generators': await buildConfig(src, lang, 'array/generator'),
                'sequence operators': await buildConfig(src, lang, 'seq/operator'),
                'sequence generators': await buildConfig(src, lang, 'seq/generator'),
            }
    }, null, '  ')}`);
}

async function buildMenu() {
    const src = './docs/src/';
    await writeConfig(src, 'en');
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
