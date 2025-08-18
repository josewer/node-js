// Crea una función que reciba un texto y devuelva las N letras más frecuentes.

console.clear();

const f = (t, n) => {

    const l = t.replace(" ", "").toLowerCase().split("");

    const obj = l.reduce((a, b) => {
        a[b] = ( a[b] ?? 0 ) + 1;
        return a;
    }, {});

    const array = Object.entries(obj);

    array.sort( ( a , b) => { return b[1] - a[1];  } );

    return array.splice(0 , n).map(item => item[0]);

}

const text = "Hola caracola mj sasssssss kkkkkkkkk";

console.log(f(text , 2));