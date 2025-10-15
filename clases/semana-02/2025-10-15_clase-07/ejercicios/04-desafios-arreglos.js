/*
Ejercicio: Desafíos con Arreglos

Objetivo:
Dominar operaciones avanzadas con arreglos: buscar, filtrar, calcular promedios,
contar elementos que cumplen condiciones y generar secuencias.
IMPORTANTE: En esta clase aún no hemos visto funciones, por lo que usaremos
solo variables, bucles y condicionales.

Descripción:
Resuelve los 5 desafíos con arreglos:
1. Siempre Aburrido - Buscar "ver TV" en actividades
2. Número de Corte - Filtrar números menores que un valor
3. Peor que el Promedio - Números bajo el promedio
4. Conteo de Pares - Contar cuántos números son pares
5. Arreglo de Fibonacci - Generar secuencia de Fibonacci

Habilidades que se practican:
- Recorrer arreglos con bucles
- Crear nuevos arreglos con .push()
- Calcular promedios
- Usar condicionales dentro de bucles
- Generar secuencias numéricas
*/

// ===================================================
// DESAFÍO 1: Siempre Aburrido
// ===================================================
console.log("=== DESAFÍO 1: Siempre Aburrido ===\n");

var actividades = ["cantar", "correr", "salir", "ver TV"];

for (var i = 0; i < actividades.length; i++) {
    if (actividades[i] === "ver TV") {
        console.log("¡Entretenido!");
    } else {
        console.log("¡Estoy Aburrido!");
    }
}

console.log("");


// ===================================================
// DESAFÍO 2: Número de Corte
// ===================================================
console.log("=== DESAFÍO 2: Número de Corte ===\n");

var numeros1 = [1, 2, 8, 4, 5, 7, 6];
var valorCorte = 4;
var menores = [];  // Arreglo para guardar resultados

// Recorrer y filtrar números menores que el valor de corte
for (var i = 0; i < numeros1.length; i++) {
    if (numeros1[i] < valorCorte) {
        menores.push(numeros1[i]);
    }
}

console.log("Números originales: " + numeros1);
console.log("Valor de corte: " + valorCorte);
console.log("Números menores que " + valorCorte + ": " + menores);
console.log("");


// ===================================================
// DESAFÍO 3: Peor que el Promedio
// ===================================================
console.log("=== DESAFÍO 3: Peor que el Promedio ===\n");

var numeros2 = [1, 20, 3, 4, 15, 6, 27];

// Paso 1: Calcular el promedio
var total = 0;
for (var i = 0; i < numeros2.length; i++) {
    total += numeros2[i];
}
var promedio = total / numeros2.length;

// Paso 2: Encontrar números bajo el promedio
var numerosBajos = [];
for (var i = 0; i < numeros2.length; i++) {
    if (numeros2[i] < promedio) {
        numerosBajos.push(numeros2[i]);
    }
}

console.log("Números: " + numeros2);
console.log("Promedio: " + promedio.toFixed(2));
console.log("Números bajo el promedio: " + numerosBajos);
console.log("");


// ===================================================
// DESAFÍO 4: Conteo de Pares
// ===================================================
console.log("=== DESAFÍO 4: Conteo de Pares ===\n");

var numeros3 = [1, 2, 3, 4, 5, 6, 10, 11, 13, 14, 16, 18];
var contadorPares = 0;

// Contar números pares
for (var i = 0; i < numeros3.length; i++) {
    if (numeros3[i] % 2 === 0) {
        contadorPares++;
    }
}

console.log("Números: " + numeros3);
console.log("Cantidad de números pares: " + contadorPares);
console.log("");


// ===================================================
// DESAFÍO 5: Arreglo de Fibonacci
// ===================================================
console.log("=== DESAFÍO 5: Arreglo de Fibonacci ===\n");

var cantidadNumeros = 15;
var fibonacci = [0, 1];  // Comenzamos con los dos primeros números

// Generamos el resto de números
for (var i = 2; i < cantidadNumeros; i++) {
    // Cada número es la suma de los dos anteriores
    var siguiente = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(siguiente);
}

console.log("Secuencia de Fibonacci (" + cantidadNumeros + " números):");
console.log(fibonacci);
console.log("");

// Versión más detallada
console.log("Explicación de la secuencia:");
for (var i = 0; i < fibonacci.length; i++) {
    if (i < 2) {
        console.log("Posición " + i + ": " + fibonacci[i] + " (valor inicial)");
    } else {
        console.log("Posición " + i + ": " + fibonacci[i] + " = " + 
                   fibonacci[i-2] + " + " + fibonacci[i-1]);
    }
}

console.log("");


// ===================================================
// EJERCICIO EXTRA: Encontrar el número más grande
// ===================================================
console.log("=== EJERCICIO EXTRA: Número Más Grande ===\n");

var numerosExtra = [45, 23, 89, 12, 67, 34, 91, 56];
var maximo = numerosExtra[0];  // Asumimos que el primero es el más grande

// Buscamos si hay alguno mayor
for (var i = 1; i < numerosExtra.length; i++) {
    if (numerosExtra[i] > maximo) {
        maximo = numerosExtra[i];
    }
}

console.log("Números: " + numerosExtra);
console.log("El número más grande es: " + maximo);


/*
Resumen de resultados esperados:

DESAFÍO 1 - Siempre Aburrido:
¡Estoy Aburrido!
¡Estoy Aburrido!
¡Estoy Aburrido!
¡Entretenido!

DESAFÍO 2 - Número de Corte:
Números originales: 1,2,8,4,5,7,6
Valor de corte: 4
Números menores que 4: 1,2

DESAFÍO 3 - Peor que el Promedio:
Números: 1,20,3,4,15,6,27
Promedio: 10.86
Números bajo el promedio: 1,3,4,6

DESAFÍO 4 - Conteo de Pares:
Números: 1,2,3,4,5,6,10,11,13,14,16,18
Cantidad de números pares: 7

DESAFÍO 5 - Fibonacci:
Secuencia: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]

EJERCICIO EXTRA:
El número más grande es: 91

💡 Conceptos clave practicados:
- Crear arreglos vacíos y llenarlos con .push()
- Calcular promedios (suma total / cantidad)
- Usar módulo (%) para identificar pares
- Generar secuencias matemáticas (Fibonacci)
- Acceder a elementos anteriores en un arreglo (i-1, i-2)
- Buscar valores máximos y mínimos
- Todo SIN usar funciones (las veremos en la próxima clase)
*/
