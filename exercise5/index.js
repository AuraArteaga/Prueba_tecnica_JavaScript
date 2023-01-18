// Ejemplo de funcion canonica 


10
function factorial(num = 10) {
    if (num === 0) {
        return 1;
    }
    //1. llamada 
     //input: 10 return 1. 10 * 9 
     //2. input 9 return 2. 9*8 
     // return 1. 10 * 9 > return 2. 9*8 > ... >  if (num === 0) {
    return num * factorial(num - 1); //recursion 
}

console.log(factorial(5)); // 120


//Ejemplo de funcion  por medio de las palabras var, let y const

function exampleVar() {
    var x = 1;
    if (true) {
        var x = 2;  
        console.log(x); 
    }
    console.log(x); 
    exampleConst();
}

function exampleLet() {
    let y = 1;
    if (true) {
        let y = 2;  
        console.log(y); 
    }
    console.log(y); // 1
}

function exampleConst() {
    const z = 1;
    if (true) {
        const z = 2;  
    }
    console.log(z); // 1
}

// Ejemplo con arrow functions

const add = (a, b) => a + b;
console.log(add(1, 2)); // 3

