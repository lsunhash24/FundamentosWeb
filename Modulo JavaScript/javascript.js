/*var mes = prompt("Ingrese un numero: ");
mes = parseInt(mes);

switch (mes) {

    case 1:
        (document.write("Enero"));
        break
    case 2:
        (document.write("Febrero"));
        break
    case 3:
        (document.write("Marzo"));
        break;
}

var edad = prompt("Ingresa tu edad actual");
var respuesta = prompt("¿Quieres estudiar en Desafío Latam?, Sí o No");

if (edad >= 18 && respuesta == "Si" || respuesta == "SI" || respuesta == "si") {
    document.write("Excelente... Bienvenido");
} else if (edad < 18 && respuesta == "Si" || respuesta == "SI" || respuesta == "si") {
    document.write("Que bueno, pero debes estar acompañado por tu representante");
} else if (respuesta == "NO" || respuesta == "No" || respuesta == "no") {
    document.write("Que lastima!!!... te esperamos pronto");
}*/


var contador = 0;
var acumulador = 0;
for (i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
        contador++;
        acumulador += i;
    }
}
alert(`Hay ${contador} números impares entre 1 y 50 y la suma acumulada de ellos es: ${acumulador}`);