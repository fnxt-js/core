import * as fs from 'fs';
import * as path from 'path';


const src = './src/';
const base = `${src}pages/`;


function getDir(dir: string) {
  return fs.readdirSync(dir);
}

function readFile(base: string, dir: string, file: string) {
  const content = fs.readFileSync(`${base + dir}/${file}`) + '';
  const name = content.split('\n')[1].split('.')[1];
  return {name, dir, file};
}

function buildDirectory(lang: string, dir: string) {
  const files = getDir(base + lang + dir);
  const contents = files.map(file => readFile(base, lang + dir, file));
  return contents.map(({name: text, dir, file}) => ({text, link: `${dir}/${path.parse(file).name}`}));
}

export function buildConfig({lang,dir,title}:{lang: string,dir: string,title: string}) {
  return {[title]: buildDirectory(`${lang}/`, dir)}
}


