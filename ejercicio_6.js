// Crea una función que reciba una palabra o frase y determine si es un palíndromo.

const esPalindromo = (text) => {


    const sanitaze = text.toLowerCase().replaceAll(" " , "");

    const textReverse = sanitaze.split("").reverse().join("");

    return sanitaze === textReverse;
    
} 

console.log(esPalindromo("Anita lavaa la tina"));



