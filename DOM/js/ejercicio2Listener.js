var boton = document.getElementById("entrada");
//var buscador = document.getElementsByName("buscador");
var resultado = document.getElementsByClassName("resultado");

boton.addEventListener('click', function() {
    resultado[0].innerHTML = "Estas buscando: " + buscador[0].value;
});