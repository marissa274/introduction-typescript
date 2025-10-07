let count = 5;
count = 10;

function add(a: number, b: number){
    return a + b;
}

const result = add(4, 5);


/**
 * cette function prend en parametre une valeur qui peut etre soit une string soit un number
 * @param {*} x 
 */

function printValue(x: string | number){
    if (typeof x === "string") {
        console.log(x.toUpperCase());
}else { 
    console.log(x.toFixed(2));
}
}