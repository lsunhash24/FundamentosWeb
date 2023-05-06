
// Validación de formulario de envio
// se declara una variable para ecceder al formulario
//a través del método getElementId
var form = document.getElementById("form");
//Se activa el evento submit del formulario, asignando
//variables a los elementos input a través de sus "id"
// y luego se llama a la funcion validar.

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;
    let resultado = validar(nombre, asunto, mensaje);
    
    if (resultado == true) {
        exito();
    }
});
// funcion que envia mensaje cuando el formulario tiene sus datos
//correstos y limpia los mensajes de error.
function exito() {
    document.querySelector(".mensaje-0").innerHTML = "Mensaje enviado con éxito";
    document.querySelector(".mensaje-1").innerHTML = "";
    document.querySelector(".mensaje-2").innerHTML = "";
    document.querySelector(".mensaje-3").innerHTML = "";
};
//funcion que valida todos los input, a través
//de patrones con expresiones regulares y el método test.

function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;
    let validacionNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".mensaje-1").innerHTML = "El nombre es requerido" 
        document.getElementById("nombre").select();
        pasamosLaValidacion = false;
    }else {
        document.querySelector(".mensaje-1").innerHTML = "";
    } 
    let validacionAsunto = /[a-zA-Z]/gim;
    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".mensaje-2").innerHTML = "El asunto es requerido"
        document.getElementById("asunto").select();
        pasamosLaValidacion = false;
    }else{
        document.querySelector(".mensaje-2").innerHTML = "";
    }
    let validaciónMensaje = /[a-zA-Z]/gim;
    if (validaciónMensaje.test(mensaje) == false) {
        document.querySelector(".mensaje-3").innerHTML = "El mensaje es requerido"
        document.getElementById("mensaje").select();
        pasamosLaValidacion = false;
    }else{
        document.querySelector(".mensaje-3").innerHTML = "";
    } 
    return pasamosLaValidacion;
  
};

// Paleta de colores
// se definen las variables para acceder al elemento html, en este caso
// los div a traves de si "id", asi poder manipular el atributo color 
var color1=document.getElementById("color1").style.background="red";
var color2=document.getElementById("color2").style.background="brown";
var color3=document.getElementById("color3").style.background="yellow";
var color4=document.getElementById("color4").style.background="green";
var color5=document.getElementById("color5").style.background="blue";
var color6=document.getElementById("color6").style.background="purple";

// al hacer click en cada elemento con color, le traspasa
// el mismo color a la caja mas grande
document.getElementById("color1").addEventListener("click", (e) => {
    document.getElementById("caja").style.background=color1; });

document.getElementById("color2").addEventListener("click", (e) => {
    document.getElementById("caja").style.background=color2; });

document.getElementById("color3").addEventListener("click", (e) => {
    document.getElementById("caja").style.background=color3; });

document.getElementById("color4").addEventListener("click", (e) => {
    document.getElementById("caja").style.background=color4; });

document.getElementById("color5").addEventListener("click", (e) => {
    document.getElementById("caja").style.background=color5; });

document.getElementById("color6").addEventListener("click", (e) => {
    document.getElementById("caja").style.background=color6; });

// **** funcion Calculadora
    //Declaramos variables que intervienen en las operaciones
var operandoa;
var operandob;
var operacion;
//se inicializa las variables con los elementos html por medio
// de su id.
  var resultado = document.getElementById("resultado");
  var reset = document.getElementById('reset');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
  var uno = document.getElementById("num1");
  var dos = document.getElementById('num2');
  var tres = document.getElementById('num3');
  var cuatro = document.getElementById('num4');
  var cinco = document.getElementById('num5');
  var seis = document.getElementById('num6');
  var siete = document.getElementById('num7');
  var ocho = document.getElementById('num8');
  var nueve = document.getElementById('num9');
  var cero = document.getElementById('cero');

//Se definen los eventos click en todas las teclas, muestra su valor en
// en el tag input, llamado resultado
  uno.onclick = (e) => {
      resultado.value = resultado.value  + "1";
  }
  dos.onclick = (e) => {
      resultado.value = resultado.value  + "2";
  }
  tres.onclick = (e) => {
      resultado.value = resultado.value  + "3";
  }
  cuatro.onclick = (e) => {
      resultado.value = resultado.value  + "4";
  }
  cinco.onclick = (e) => {
      resultado.value = resultado.value  + "5";
  }
  seis.onclick = (e) => {
      resultado.value = resultado.value  + "6";
  }
  siete.onclick = (e) => {
      resultado.value = resultado.value  + "7";
  }
  ocho.onclick = (e) => {
      resultado.value = resultado.value  + "8";
  }
  nueve.onclick = (e) => {
      resultado.value = resultado.value  + "9";
  }
  cero.onclick = (e) => {
      resultado.value = resultado.value  + "0";
  }
  reset.onclick = (e) => {
      resetear();
  }
  suma.onclick = (e) => {
      operandoa = resultado.value;
      operacion = "+";
      limpiar();
  }
  resta.onclick = (e) => {
      operandoa = resultado.value;
      operacion = "-";
      limpiar();
  }
  multiplicacion.onclick = (e) => {
      operandoa = resultado.value;
      operacion = "*";
      limpiar();
  }
  division.onclick = function(e){
      operandoa = resultado.value;
      operacion = "/";
      limpiar();
  }
  igual.onclick = (e) => {
     operandob = resultado.value;
      resolver();
  }
//Dentro de este bloque hacemos referencia a dos funciones, limpiar y resetear 

//Para los eventos de suma, resta, multiplicación y división
//se almacena la variable operandoa la que tenemos en el contenedor
// resultado y se traspasa la operación que se desea realizar.

//En el botón igual se almacena el operandob 
//que es el segundo valor ingresado,luego se llama el metodo resolver
//el cual efectua la operacion indicada.
function limpiar(){
  resultado.value = "";
}
function resetear(){
  resultado.value = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
// para el caso de la resta, si el resultado es negativo, se 
// imprime 0.
function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        if(res<0){
            res=0;
        }
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.value = res;
}