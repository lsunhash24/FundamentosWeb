let form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    limpiarErrores();
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let resultado = validar(nombre, asunto, mensaje);
    if (resultado == true) {
        exito();
    };
});

function limpiarErrores() {
    document.getElementById("nombre").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";
};

function exito() {
    document.querySelector(".mensaje-0").innerHTML = "Mensaje enviado con éxito";
    document.querySelector(".mensaje-1").innerHTML = "";
    document.querySelector(".mensaje-2").innerHTML = "";
    document.querySelector(".mensaje-3").innerHTML = "";
};

function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".mensaje-1").innerHTML = "El nombre es requerido o ingrese un nombre válido"
        document.getElementById("nombre").select();
        pasamosLaValidacion = false;
    } else {
        document.querySelector(".mensaje-1").innerHTML = "";
    };
    let validacionAsunto = /[a-zA-Z]/gim;
    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".mensaje-2").innerHTML = "El asunto es requerido o datos no válidos"
        document.getElementById("asunto").select();
        pasamosLaValidacion = false;
    } else {
        document.querySelector(".mensaje-2").innerHTML = "";
    };
    let validaciónMensaje = /[a-zA-Z]/gim;
    if (validaciónMensaje.test(mensaje) == false) {
        document.querySelector(".mensaje-3").innerHTML = "El mensaje es requerido o datos no válidos"
        document.getElementById("mensaje").select();
        pasamosLaValidacion = false;
    } else {
        document.querySelector(".mensaje-3").innerHTML = "";
    };
    return pasamosLaValidacion;
};