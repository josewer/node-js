// Programa que recibe un parametro por consola y simula el funcionamiendo de un ls -l

const path = require('node:path');
const fs = require('node:fs').promises;
const pc = require('picocolors');

const arg = process.argv;
const folder = arg[2] ?? '.';

async function ls(folder) {
    let files;

    try {
        files = await fs.readdir(folder);
    } catch (error) {
        console.error(pc.red(`Hubo un error al intentar leer el directorio ${folder}`));
        process.exit(1);
    }

    const maxLengthtName = files.reduce((max, current) => {
        return max > current.length ? max : current.length;
    }, 0);

    const data = await Promise.all(files.map(async file => {
        const filePath = path.join(folder, file);
        const stat = await fs.stat(filePath);

        const isDirectory = stat.isDirectory() ? 'd' : 'f';
        const size = stat.size.toString();
        const fileModified = stat.mtime.toLocaleString();

        return {
            isDirectory, file, size, fileModified
        };
    }));

    for (const d of data) {
        console.log(`${pc.bgMagenta(d.isDirectory)} | ${pc.blue(d.file.padEnd(maxLengthtName))} | ${pc.yellow(d.size.padStart(10))} | ${pc.green(d.fileModified)}`);
    }
}

ls(folder);
