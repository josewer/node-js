function sum ( numbers ) {
    
    let total = 0;

    for ( let n of numbers ) {
        total += n;
    }

    return total;
}

module.exports = {sum};