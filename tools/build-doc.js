const fs = require('fs');
const path = require('path');
const h2 = (name) => `## ${name}`;
const readFileSync = (...parts) => fs.readFileSync(path.resolve(...parts));

const readContents = (dir) => fs.readdirSync(dir)
    .map(file => readFileSync(dir, file));

const aliasRoot = {
    'array': 'Array',
    'seq/operator': 'Sequence Operator',
    'seq/generator': 'Sequence Generator',
};
const docContent = Object.entries(aliasRoot)
    .map(([dir, name]) => {
        const featureDir = path.resolve(__dirname, `../doc/${dir}`);

        const contents = readContents(featureDir);

        return contents.length ? [h2(name), ...contents].join('\n') : '';
    }).join('\n');

const indexContent = readFileSync(__dirname, `../doc/index.md`);

const readmeContent = [indexContent, docContent].join('\n');
const readmePath = path.resolve(__dirname, `../README.md`);

fs.writeFileSync(readmePath, readmeContent);

