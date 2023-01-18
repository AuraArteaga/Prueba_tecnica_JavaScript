let objectValues = {
    string:"1",
    number:1
}
// == es que solo compara los valores pero no compara los tipos
// === compara tanto los valores como los 

if(objectValues.string == objectValues.number){
      console.log("Son iguales segun el operador ==")
}

if(objectValues.string !== objectValues.number){
     console.log("Son diferentes segun el operador ===")
}