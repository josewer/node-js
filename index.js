const path = require('node:path');
const fs = require('node:fs').promises;

const arg = process.argv;
const folder = arg[2] ?? '.';

async function ls (folder) {
    const files = await fs.readdir(folder);

    const maxLengthtName = files.reduce((max, current) => {
        return max > current.length ? max : current.length;
    }, 0);

   const data = await Promise.all (files.map(async file => {
        const filePath = path.join(folder, file);
        const stat = await fs.stat(filePath);

        const isDirectory = stat.isDirectory() ? 'd' : 'f';
        const size = stat.size.toString();
        const fileModified = stat.mtime.toLocaleString();

        return {
            isDirectory , file , size , fileModified
        };
    }));

    for (let d of data) {
        console.log(`${d.isDirectory} | ${d.file.padEnd(maxLengthtName)} | ${d.size.padStart(10)} | ${d.fileModified}`)
    }
}

ls(folder)