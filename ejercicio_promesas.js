
// Crea una promesa que después de 2 segundos se resuelva con el mensaje "Hola mundo".
const promesa_1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Hola mundo");
    }, 2000)

});

promesa_1
    .then(result => console.log(result))
    .catch(err => console.error(err))
    .finally(() => console.log("termino promesa_1"))

/*
Haz una promesa que use Math.random().

Si el número es mayor a 0.5 → resuelve con éxito.

Si es menor o igual → recházala con error.
*/
const promesa_2 = new Promise((resolve, reject) => {

    const n = Math.random();

    if (n > 0.5) {
        resolve("Todo correcto")
    } else {
        reject("Error")
    }
});

promesa_2
    .then(result => console.log(result))
    .catch(err => console.error(err))
    .finally(() => console.log("termino promesa_2"))


/*
Empieza con el número 2 y encadena varias promesas para:

Multiplicarlo por 2

Luego por 3

Luego por 4
Al final, imprime el resultado.
*/

const promesa_3 = new Promise((resolve, reject) => {
    resolve(2)
});

promesa_3
    .then(result => result * 2)
    .then(result => result * 3)
    .then(result => result * 4)
    .then(result => console.log(result))
    .catch(err => console.error(err))
    .finally(() => console.log("termino promesa_3"))

/*
Crea tres promesas que se resuelvan en diferentes tiempos (ej: 1s, 2s y 3s).
Cuando todas terminen, imprime los resultados en un array.
*/

const promise_4 = (time, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, time)
    });
};

Promise.all([
    promise_4(1000, "manzana"),
    promise_4(2000, "peras"),
    promise_4(3000, "melon"),
]
).then(result => console.log(result))
    .finally(() => console.log("termino promise_4"));


/*
Haz lo mismo que en el ejercicio anterior, pero usando Promise.race para mostrar solo la primera promesa que termina.
*/

const promise_5 = (time, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, time)
    });
};

Promise.race([
    promise_5(1000, "manzana"),
    promise_5(2000, "peras"),
    promise_5(3000, "melon"),
]
).then(result => console.log(`Gano ${result}`))
    .finally(() => console.log("termino 5"));


// Toma el ejercicio 1 pero usando async/await."
const promesa_6 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Hola mundo asyn");
    }, 2000)

});

async function ejemploAsyn() {
   const j = await promesa_6;
   console.log(j)
   
}

ejemploAsyn();