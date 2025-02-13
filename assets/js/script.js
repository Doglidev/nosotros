document.addEventListener('DOMContentLoaded', function() {

    console.log("Archivo cargado");

const boton = document.getElementById('mostrarLista');
const lista = document.getElementById('lista');
const items = lista.getElementsByTagName('li');

boton.addEventListener('click', function() {
    let delay = 0;
    for (let i = 0; i < items.length; i++){
                items[i].style.display = 'none'; 
                }


            for (let i = 0; i < items.length; i++) {
                setTimeout(function() {
                 items[i].style.display = 'block';
                }, delay);
            delay += 2500;
     }
   });



   document.getElementById("mostrarLista").addEventListener("click", function() {
    while(true) {
        let respuesta = confirm("Me amas mucho mucho mucho y soy el mas lindo de todos?");

        if(respuesta) {
            break;
        }
       }
    document.getElementById("lista").style.display = "block";
});
}); // Aca se cierra el DOM content loaded 















  