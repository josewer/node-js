import {  createRequire  } from 'node:module'

// Recupero el require de CommonJs
const require = createRequire(import.meta.url);

export const readJson = (path) => {
    return require(path)
} 