//Variables
let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}

/*
alert('Bienvenido al juego del número secreto');
// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
*/

//desafio
/*
// 1. Preguntar al usuario qué día de la semana es
let dia = prompt("¿Qué día de la semana es hoy?").toLowerCase();

if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// 2. Verificar si un número es positivo o negativo
let numero = parseFloat(prompt("Ingresa un número:"));

if (numero > 0) {
    alert("El número es positivo.");
} else if (numero < 0) {
    alert("El número es negativo.");
} else {
    alert("El número es cero.");
}

// 3. Sistema de puntuación para un juego
let puntuacion = parseInt(prompt("Ingresa tu puntuación:"));

if (puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Inténtalo nuevamente para ganar.");
}

// 4. Informar sobre el saldo de una cuenta
let saldo = parseFloat(prompt("¿Cuál es tu saldo en la cuenta?"));
alert(`Tu saldo actual es de $${saldo}.`);

// 5. Mostrar una alerta de bienvenida con el nombre del usuario
let nombre = prompt("¿Cuál es tu nombre?");
alert(`¡Bienvenido/a, ${nombre}!`);
*/
