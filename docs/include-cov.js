import * as fs from 'fs-extra';



(async () => {
    fs.copy('../coverage', './dist')

})();
