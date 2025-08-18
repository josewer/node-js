/*
Ejercicio: Contar cuántas palabras son cortas, medianas o largas en un texto.

Palabra corta: 1–3 letras

Palabra mediana: 4–6 letras

Palabra larga: 7 o más letras

Tu tarea: crear una función que reciba un texto y devuelva un objeto así:

{
  cortas: X,
  medianas: Y,
  largas: Z
}
*/

const contarPalabras = (texto) => {

    return texto.split(" ").reduce((acc, curr) => {
        const size = curr.length;

        if (size >= 7) { acc.largas++; } 
        else if (size >= 4 ) { acc.medianas++; } 
        else { acc.cortas++; }

        return acc;

    }, { cortas: 0, medianas: 0, largas: 0 })

};

console.log(contarPalabras("Jose tiene 5 años de edad. Le enamora todo"))

// solucion chat gpt
const contarPalabrasPro = (texto) => {
  const categorias = { cortas: 0, medianas: 0, largas: 0 };

  texto.split(" ").forEach(palabra => {
    const len = palabra.length;
    const clave = len >= 7 ? "largas" : len >= 4 ? "medianas" : "cortas";
    categorias[clave]++;
  });

  return categorias;
};