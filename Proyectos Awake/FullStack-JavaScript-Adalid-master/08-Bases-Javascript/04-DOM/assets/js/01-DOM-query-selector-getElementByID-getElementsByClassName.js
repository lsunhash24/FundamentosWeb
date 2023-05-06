/*
=======MANIPLANDO ELEMENTOS DE LA PÁGINA ======================================================================
	1.Query Selector
	2.getElementsById
	3.getElementsByClassName
	4.createElement
==============================================================================================
*/
// ============ ACLARACION ===================================
/*
	num2 + num1 / 8 + 2;
	Como un ser humano, puedes leer esto como "50 más 10 es igual a 60", 
	luego "8 más 2 es igual a 10", y finalmente "60 dividido por 10 es igual a 6".

	Pero el navegador hace "10 dividido por 8 es igual a 1.25", 
	luego "50 más 1.25 más 2 es igual a 53.25".

	Esto es debido a la precedencia de operadores — 
	algunos operadores son aplicados antes de otros cuando se calcula 
	el resultado de una suma (referida como una expresión, en programación). 
	La precedencia de operadores en JavaScript es la misma que en las matemáticas de la escuela 
	— La multiplicación y la división se resuelven siempre primero, luego la suma y resta 
	(la suma siempre se evalua de izquierda a derecha).

	Si quieres alterar la precedencia de operación, 
	puedes colocar paréntesis alrededor de las partes que quieras explícitamente evaluar primero. 
	Para obtener un resultado de 6, podríamos hacer esto:
*/


let num1 = 10;
let num2 = 50;
let operatoria = (num2 + num1) / (8 + 2);
// console.log( operatoria );

// Seleccionamos todos los div
let todosLosDiv = document.getElementsByTagName('div');
let section = document.querySelector('#miseccion');
let sectionId = document.getElementById('miseccion');
let hr = document.createElement('hr')

console.log('todosLosDiv-->',todosLosDiv);
console.log('section-->',section);
console.log('sectionId-->',sectionId);
console.log('hr------>',hr);

for (let i = 0; i < todosLosDiv.length; i++) {
	todosLosDiv[i].classList.add('container');

	// console.log('Que és? --->',typeof todosLosDiv[i].textContent == 'string')

	if( typeof todosLosDiv[i].textContent == 'string' ){
		console.log('Entro por que es un string')
		let parrafo = document.createElement('p');
		let texto = document.createTextNode(todosLosDiv[i].textContent)
		parrafo.append(texto)
		section.append(parrafo)
		section.classList.add('container')
		document.querySelector('.font-weight-bold').classList.add('container')
	}
}

section.before(hr)
let divRojos = document.getElementsByClassName('rojo');
let arr = [...divRojos]

// arr.forEach( element => {
// 	element.style.background = 'yellow'
// });

for (const key in divRojos) {
	if (Object.hasOwnProperty.call(divRojos, key)) {
		const element = divRojos[key];
		console.log(element.style.background = 'yellow')
	}
}

