const fs = require('fs');
const path = require('path');
const h2 = (name) => `##${name}`;

const aliasRoot = {
    'array': 'Array',
    'seq/op': 'Sequence Operator',
    'seq/gen': 'Sequence Generator',
};
const docContent = Object.entries(aliasRoot)
    .map(([dir, name]) => {
        const featureDir = path.resolve(__dirname, `../doc/${dir}`);

        const contents = fs
            .readdirSync(featureDir)
            .map(file => path.join(featureDir, file))
            .map(path => fs.readFileSync(path));

        return contents.length ? [h2(name), ...contents].join('\n') : '';
    }).join('\n');

const indexPath = path.resolve(__dirname, `../doc/index.md`);
const indexContent = fs.readFileSync(indexPath);

const readmeContent = [indexContent, docContent].join('\n');
const readmePath = path.resolve(__dirname, `../README.md`);

fs.writeFileSync(readmePath, readmeContent);

