// se crea e inicializa variable para entrar al control de las funciones
var continuar = false;

// funcion para validar número ingresado por el usuario
let validarNumero = (num) => {

        if (num < 1 || num > 20) {

            console.log("Número fuera de rango")

        } else {
            continuar = true;
        }
    }
    // funcion para crear la tabla de multiplicar hasta el numero 
    // que ingresa el usuario, muestra resultado por consola
let crearTabla = (num) => {
    console.log(`Tabla del ${num}`);
    for (let i = 1; i <= num; i++) {

        let resultado = i * num;

        console.log(`${i} x ${num} = ${resultado}`);

    }
}

// funcion que calcula el factorial hasta el número 
// ingresado por el usuario, con ciclo for anidado,
// se muestra resultado por consola
let factorial = (num) => {

    for (let i = 1; i <= num; i++) {
        let resultado2 = 1;
        for (let j = 1; j <= i; j++) {
            resultado2 = resultado2 * j;
        }
        console.log(`Factorial de ${i} es ${resultado2}`);

    }

}

// se solicita al usuario que ingrese un numero del 1 al 20
// se valida el rango del del número ingresado
var num = parseInt(prompt('Ingrese un nunero entre 1 y el 20'));
validarNumero(num);

// si el número ingresado está en el rango correcto
// se llaman a ejecutar las funciones con los cálculos solicitados
if (continuar == true) {
    crearTabla(num);
    factorial(num);
}