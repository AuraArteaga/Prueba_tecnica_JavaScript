

for(var iExterna = 0; iExterna < 3; iExterna++){ //mismo tiempo
    setTimeout(()=>{
       console.log("el valor de var despues de setTimeout {i}", iExterna)//espera un segundo y lo ejecuta
    },1000) // es una funcion de primera clase, por que recibe una funcion como parametro
    console.log("el blucle ya termino {iExterna} ", iExterna)
}


for(let iExterna = 0; iExterna < 3; iExterna++){ //mismo tiempo
    setTimeout(()=>{
       console.log("el valor de var despues de setTimeout {i}", iExterna)//espera un segundo y lo ejecuta
    },1000) // es una funcion de primera clase, por que recibe una funcion como parametro
    console.log("el blucle ya termino {iExterna} ", iExterna)
}
