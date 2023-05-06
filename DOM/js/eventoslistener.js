var miBoton = document.getElementById("miBoton");
//listener
miBoton.addEventListener('click', function() {

    miFunction();

});

function miFunction() {

    console.log('Probando el listener');
}

var miInput = document.getElementById("nombre");
//listener
nombre.addEventListener('change', function() {

    alert('change');

});

var miInput = document.getElementById("nombre");
//listener
nombre.addEventListener('blur', function() {

    alert('blur');

});