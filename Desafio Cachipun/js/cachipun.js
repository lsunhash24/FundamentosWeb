/*
Crear un programa que le permita a una persona jugar a Piedra, papel o tijera contra el computador,
indicando cuántas veces desea jugar o repetir el juego.  Piedra, papel o tijera (cachipún) es un juego entre dos
personas (en este caso, tú y el computador) donde cada una de ellas de manera
independiente y secreta debe elegir una de las opciones ( piedra, papel y tijera ) y compararla
con la opción de la otra persona. Para determinar quien gana, se deben seguir las siguientes
reglas:

● Tijera le gana a papel
● Papel le gana a piedra
● Piedra le gana a tijera
● Si ambos jugadores eligen la misma opción es un empate

1.Solicitar al usuario las veces que desea que se repita el juego consecutivamente, es
decir, cuántas veces deberá jugar contra la computadora. Por cada juego, se debe
mostrar el resultado inmediatamente y luego pedir nuevamente una respuesta
dependiendo de las veces que haya indicado el usuario que desea jugar.

2. Solicitar al usuario que indique su jugada.
Las opciones son las siguientes:
    ● Piedra
    ● Papel
    ● Tijera

3. Generar una jugada automática para la máquina usando la función Math.random() de Javascript.

4. Definir a un ganador considerando la jugada del usuario y la generada automáticamente para la máquina.

5. Indicar el resultado de la partida dependiendo del caso:
    ● Felicitar al ganador en caso de ser el usuario.
    ● Indicarle al usuario que ha perdido contra la máquina en caso de que ésta sea la que gane.
    ● Declarar un empate.

En Javascript, se pueden crear números aleatorios usando la función Math.random(). Con
el siguiente código, se pueden obtener números aleatorios entre 0 y 2.

Math.floor(Math.random()*3)

Usando esta función podemos determinar la jugada de la máquina, dado que los resultados de esta
función pueden ser 0, 1 ó 2, puedes asumir que cada uno de estos números corresponde a
una jugada ( piedra, papel o tijeras ) y así definir la jugada de la máquina.
*/

// funcion que determina la juagada de la maquina 
// obtenida por la función matemática math.random()
const alazar = () => {

    let num = (Math.floor(Math.random() * 3));
    if (num == 0) {
        return "Tijera"
    }
    if (num == 1) {
        return "Papel"
    }
    if (num == 2) {
        return "Piedra"
    }
}
// se definen variables para acumular las veces que gana cada jugador
var acumuladorUsuario = 0;
var acumuladorMaquina = 0;
// se define variable para indicar las veces que se realizará el juego
var numveces = parseInt(prompt("Ingrese la cantidad de veces a jugar: "));

// se utiliza un ciclo for para generar los juegos según lo indicado por el usuario
// se utilizan controles de flujos anidados para comparar la elecciones del usuario
// y la respuesta generada por procesador matemático
for (let i = 1; i <= numveces; i++) {
    alert(`Este es el juego numero ${i}`);
    let opcionUsuario = parseInt(prompt("Ingrese opcion cachipun: \n 1.- Tijera \n 2.- Papel \n 3.-Piedra"));
    if (opcionUsuario == 1) {
        let opcionMaquina = alazar();
        alert(`Usuario eligió Tijera \n La máquina eligió ${opcionMaquina}`)
        if (opcionMaquina == "Tijera") {
            alert("Empate")
        }
        if (opcionMaquina == "Papel") {
            acumuladorUsuario++;
            alert("Ganaste")
        }
        if (opcionMaquina == "Piedra") {
            acumuladorMaquina++;
            alert("Perdiste")
        }
    }
    if (opcionUsuario == 2) {
        let opcionMaquina = alazar();
        alert(`Usuario eligió Papel \n La máquina eligió ${opcionMaquina}`)
        if (opcionMaquina == "Tijera") {
            acumuladorMaquina++;
            alert("Perdiste")
        }
        if (opcionMaquina == "Papel") {
            alert("Empate")
        }
        if (opcionMaquina == "Piedra") {
            acumuladorUsuario++;
            alert("Ganaste")
        }
    }
    if (opcionUsuario == 3) {
        let opcionMaquina = alazar();
        alert(`Usuario eligió Piedra \n La máquina eligió ${opcionMaquina}`)
        if (opcionMaquina == "Tijera") {
            acumuladorUsuario++;
            alert("Ganaste")
        }
        if (opcionMaquina == "Papel") {
            acumuladorMaquina++;
            alert("Perdiste")
        }
        if (opcionMaquina == "Piedra") {
            alert("Empate")
        }
    }
}
// resultados finales entregados por variables acumuladoras
if (acumuladorUsuario > acumuladorMaquina) {
    alert('Felicidades le ganaste a la máquina');
} else if (acumuladorUsuario < acumuladorMaquina) {
    alert('Lo siento la máquiona te ganó');
} else {
    alert('Finalmente esto es un empate');
}
