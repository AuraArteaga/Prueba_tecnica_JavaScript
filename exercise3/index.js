document.addEventListener('DOMContentLoaded', function(){

    function startApp(){
       loadedEvents();
    }

    function loadedEvents(){
        loadEventClickButton()
    }

    function loadEventClickButton(){
        const button = document.querySelector("#my-button");
        console.log("DOM button element", button)
        button.addEventListener('click', onClickButton)
    }
    function onClickButton(e){
          const miCaja = document.querySelector('#mi-caja')
          if(!miCaja){
              return; 
          }
          if( miCaja.style.display === "block"){
            miCaja.style.display = "none"
          }else{
            miCaja.style.display = "block"
          }
    }
    startApp()
})