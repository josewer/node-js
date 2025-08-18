/* 
Crea una función que reciba dos palabras o frases y determine si son anagramas.
Un anagrama significa que tienen las mismas letras, aunque en distinto orden.

console.log(esAnagrama("Roma", "Amor")); // true
console.log(esAnagrama("Escucha", "Cuchase")); // true
console.log(esAnagrama("Hola", "Mundo")); // false

*/

console.clear();

const esAnagrama = (text1, text2) => {

    const sanize1 = text1.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
    const sanize2 = text2.toLowerCase().replaceAll(/[^a-z0-9]/g, "");


    const contarVocales = (text) => {

        const contar = text.split("").reduce((acc, current) => {
            acc[current] = (acc[current] ?? 0) + 1;
            return acc;
        }, {});


        // Para ordenar numeros si es con a - b.. pero para letras eso me da NaN.. asi que se usa localeCompare
        return Object.entries(contar).sort((a, b) => { return b[0].localeCompare(a[0]); });
    }

    return contarVocales(sanize1).join("") === contarVocales(sanize2).join("");
}

console.log(esAnagrama("Roma", "Atmor")); // true


// solucion chatgpt

const esAnagramaChatGpt = (t1, t2) => {
  const clean = t => t.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
  return clean(t1) === clean(t2);
};
