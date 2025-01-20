//Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}

//desafio
/*
// 1. Contador de 1 a 10 usando un bucle 'while'
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// 2. Contador de 10 a 0 usando un bucle 'while'
contador = 10;
while (contador >= 0) {
    console.log(contador);
    contador--;
}

// 3. Cuenta regresiva: de 0 hasta un número ingresado por el usuario
let numeroRegresivo = parseInt(prompt("Ingresa un número para la cuenta regresiva:"));
let i = numeroRegresivo;
while (i >= 0) {
    console.log(i);
    i--;
}

// 4. Cuenta progresiva: de 0 hasta un número ingresado por el usuario
let numeroProgresivo = parseInt(prompt("Ingresa un número para la cuenta progresiva:"));
i = 0;
while (i <= numeroProgresivo) {
    console.log(i);
    i++;
}

*/
