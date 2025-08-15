const numArray = [3, 5, 7];
const strArray = ["Silvana", "Jose"];
const movies = [{ title: "Peli 1", duration: 4 }, { title: "Peli 2", duration: 4 }]
const fruits = ["Pera", "Manzana", "Manzana", "Melon"]


const sumNum = numArray.reduce((acc, curr) => {
    return acc + curr;
}, 0)

console.log(sumNum);

const strResult = strArray.reduce((acc, curr) => {
    return acc.concat(" ").concat(curr);
}, "").trimStart();

console.log(strResult);
console.log(numArray.join(" "));


const titles = movies.reduce((acc, curr) => {
    acc.push(curr.title);
    return acc;
}, []);

console.log(titles);

const conteo = fruits.reduce((acc, curr) => {

    acc[curr] = ((acc[curr] ?? 0) || 2) + 1;
    return acc;

}, {});

console.log(conteo);

const obj = {};

obj.nombre = "Jose";
obj["nombre"] = "Pedro"
obj["edad"] = 21
console.log(obj);

