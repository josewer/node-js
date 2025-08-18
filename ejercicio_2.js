// Sacar el maximo valor en un array entre 2 elementos adyacentes.

const array = [1, 2, 3, 4, 51, 6, 7, 8, 9, 10, 11, 12];

let result = -Infinity;

console.clear();

for (let i = 0; i < array.length - 1; i++) {
    let sum = array[i] + array[i + 1];
    result = result > sum ? result : sum;
}

console.log(result);
