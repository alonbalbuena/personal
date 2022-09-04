import * as fs from 'fs';

const content = fs.readFileSync('./dist/index.html', 'utf8');
const fixedContent = content.replace(/\/_nuxt\//g,'/personal/_nuxt/')
fs.writeFileSync('./dist/index.html', fixedContent)