/*
Crea una función que, dado un texto, devuelva la primera letra que no se repite.
Si todas se repiten, que devuelva null.

console.log(primerUnico("abacabad")); // "c"
console.log(primerUnico("aabbcc"));   // null
console.log(primerUnico("hola mundo")); // "h"

*/

console.clear();

const primerUnico = (text) => {

    const clean = text.toLowerCase().replaceAll(/[^a-z0-9]/g, "").split("");

    const counter = clean.reduce((acc, current) => {
        acc[current] = (acc[current] ?? 0) + 1;
        return acc;
    }, {});

    return Object.entries(counter).find(f => f[1] === 1)?.map(m => m[0])[0] ?? null;
}



console.log(primerUnico("abacabad")); // "c"
console.log(primerUnico("aabbcc"));   // null
console.log(primerUnico("hola mundo")); // "h"
console.log(primerUnico("cbacd")); // debería "b", pero con entries ordenadas podrías obtener otra

// solucion chatgpt
const primerUnicoChatGpt = (text) => {
  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, "").split("");

  const counter = clean.reduce((acc, ch) => {
    acc[ch] = (acc[ch] ?? 0) + 1;
    return acc;
  }, {});

  return clean.find(ch => counter[ch] === 1) ?? null;
};

