
//Crea una función que reciba un texto y devuelva la longitud promedio de sus palabras.
const calcAverageLenght = (text) => {
    const words = text.split(" ");

    const totaLetters = words.reduce( (acc , current) => {
        return acc += current.length;
    } , 0);

    return totaLetters / words.length; 
};

console.log(calcAverageLenght("Hola mundo"))