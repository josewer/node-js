/*
Crea una función que reciba un texto y devuelva un objeto con el número de vocales y consonantes que tiene.
console.log(contarLetras("Hola mundo"));
// { vocales: 4, consonantes: 5 }

Ignorar espacios, números y símbolos.

Considerar solo letras a-z.
*/

const contarLetras = (text) => {
    const clean = text.toLowerCase().replaceAll(/[^a-z]/g,"");
    const vocales = clean.replaceAll(/[^a e i o u]/g, "").length;
    const consonantes = clean.length - vocales;
    return { vocales , consonantes };
};

console.log(contarLetras("Hola mundo"));

// Solucion chat gpt
const contarLetrasChatGpt = (text) => {
    const clean = text.toLowerCase().replaceAll(/[^a-z]/g,"");

    return clean.split("").reduce((acc, char) => {
        if ("aeiou".includes(char)) {
            acc.vocales++;
        } else {
            acc.consonantes++;
        }
        return acc;
    }, { vocales: 0, consonantes: 0 });
};