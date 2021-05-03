/**
 * Copy from https://github.com/ReactiveX/rxjs/blob/master/tools/generate-alias.js
 * Previously this was done by placing cjs to top-level package when it's published -
 * Now build uses `dist` as explicit output subpath so we generate top-level alias here instead.
 */
import fs from 'fs-extra';

import path from 'path';

const aliasRoot = [
     'array', 'option', 'result'
];

aliasRoot.map((alias) => path.resolve(__dirname, `../${alias}`)).forEach((alias) => {
    if (fs.existsSync(alias)) {
        fs.removeSync(alias);
    }
    fs.ensureDirSync(alias);
});

aliasRoot.forEach((alias) => {
    const pkgManifest = {
        'name': `@fnxt/core/${alias}`,
        'types': `../dist/${alias}/index.d.ts`,
        'main': `../dist/${alias}/index.js`,
        'sideEffects': false
    };

    fs.writeJSON(path.resolve(__dirname, `../${alias}/package.json`), pkgManifest, { spaces: 2 });
});

