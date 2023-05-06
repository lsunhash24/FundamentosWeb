// funcion que determina la juagada de la maquina 
// obtenida por la función matemátiva math.random()
function alazar() {

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
// se utilizan controles de flujos anidados para comparar la elcciones del usuario
// y la respuesta generada por procesador matemático
for (let i = 1; i <= numveces; i++) {
    alert(`Este es el juego numero ${i}`);
    var opcionUsuario = parseInt(prompt("Ingrese opcion cachipun: \n 1.- Tijera \n 2.- Papel \n 3.-Piedra"));
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