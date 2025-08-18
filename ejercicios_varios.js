

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log("eee")
numeros.filter(n => n % 2 != 0).forEach(item => {
    console.log(item)
});
console.log("eee")

let sum = 0;
for (let i = 1; i < 100; i++) {
    sum += i;
}



const cuadrado = (n) => {
    return n * n;
};

console.log(cuadrado(2));


const saludar = (name) => "Hola, ".concat(name);
console.log(saludar("Jose"));

const data = [5, 12, 8, 20, 3];

for (let n of data) {
    if (n > 10) {
        console.log(n);
    }
}

const mayores = data.filter(n => n > 10);
console.log(mayores);

const persona = {
    nombre: "Jose",
    edad: 25
}

console.log(`${persona.nombre} tiene ${persona.edad} años`)


const personas = [
    {
        nombre: "Jose",
        edad: 25
    },
    {
        nombre: "Silvana",
        edad: 25
    },
    {
        nombre: "Sandro",
        edad: 10
    }
]

const mayores20Años = personas.filter(f => f.edad > 20).reduce((acc, persona) => {
    acc.push(persona.nombre);
    return acc;
}, []);

console.log(mayores20Años)

const mayores20Años_v2 = personas.filter(f => f.edad > 20).map(p => p.nombre);

console.log(mayores20Años_v2)


const data_1 = [5, 12, 8, 20, 3];

function maximo(data) {

    let maxValue = data[0] ?? 0;

    for (let n of data) {
        if (maxValue < n) {
            maxValue = n;
        }
    }

    return maxValue;
}

const maxValue = Math.max(...data_1)


function fizzBuzz(n) {

    if (n % 3 == 0 && n % 5 == 0) {
        return "FizzBuzz";
    } else if (n % 3 == 0) {
        return "Fizz";
    }
    else if (n % 5 == 0) {
        return "Buzz";
    } else {
        return n;
    }
}

const fizzBuzz_v2 = n =>
    n % 15 === 0 ? "FizzBuzz" :
        n % 3 === 0 ? "Fizz" :
            n % 5 === 0 ? "Buzz" :
                n;

const contarPalabras = (texto , n) => {
    const obj = texto.split(" ").reduce((acc, item) => {
        acc[item.toLowerCase()] = (acc[item.toLowerCase()] ?? 0) + 1;
        return acc;
    }, {});

    return obj;
};

const conteo = contarPalabras("Hola hola Jose hola mundo hola mundo mundo");

const array_1 = Object.entries(conteo);

array_1.sort( (a , b) => { return b[1] - a[1] } );

console.log(array_1);

const r =  array_1.slice(0 , 2 ).map(item => item[0]);

console.log(r);
