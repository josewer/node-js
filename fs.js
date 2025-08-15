const { text } = require('node:stream/consumers');

const fs = require('node:fs').promises;

console.clear();

console.log("Empiezo");

(async () => {
    const text = await fs.readFile('./file_1.txt', 'utf-8');
    console.log(text);
})();

console.log("Hago cositas");

(async () => {
    console.log("entro")
    const text = await fs.readFile('./file_2.txt', 'utf-8');
    console.log(text);
})();


Promise.all([
    fs.readFile('./file_1.txt', 'utf-8'),
    fs.readFile('./file_2.txt', 'utf-8')
]).then(([text1, text2]) => {
    console.log(`Paralelo ${text1}`);
    console.log(`Paralelo ${text2}`);
})

console.log("Hago mas cositas");