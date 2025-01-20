//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}

//desafio

/*

// 1. Mensaje de bienvenida
console.log("¡Bienvenido al programa!");

// 2. Variable "nombre" con mensaje en consola
let nombre = "TuNombre"; // Reemplaza "TuNombre" con tu nombre
console.log(`¡Hola, ${nombre}!`);

// 3. Variable "nombre" con mensaje en alert
alert(`¡Hola, ${nombre}!`);

// 4. Pregunta con prompt
let lenguajeFavorito = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`Tu lenguaje favorito es: ${lenguajeFavorito}`);

// 5. Suma de dos valores
let valor1 = 10; // Reemplaza con el valor deseado
let valor2 = 20; // Reemplaza con el valor deseado
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);

// 6. Resta de dos valores
resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);

// 7. Verificar mayor o menor de edad
let edad = prompt("¿Cuál es tu edad?");
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// 8. Verificar si un número es positivo, negativo o cero
let numero = prompt("Introduce un número:");
numero = parseFloat(numero);
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// 9. Mostrar números del 1 al 10 con while
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// 10. Verificar si una nota es aprobatoria o no
let nota = 8; // Reemplaza con la nota deseada
if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// 11. Generar un número aleatorio
let numeroAleatorio = Math.random();
console.log(`Número aleatorio: ${numeroAleatorio}`);

// 12. Generar un número entero entre 1 y 10
let numeroEntre1y10 = Math.floor(Math.random() * 10) + 1;
console.log(`Número aleatorio entre 1 y 10: ${numeroEntre1y10}`);

// 13. Generar un número entero entre 1 y 1000
let numeroEntre1y1000 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número aleatorio entre 1 y 1000: ${numeroEntre1y1000}`);

*/
