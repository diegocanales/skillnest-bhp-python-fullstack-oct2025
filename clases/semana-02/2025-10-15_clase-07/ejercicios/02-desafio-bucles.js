/*
Ejercicio: Desafíos de Bucles

Objetivo:
Dominar el uso de bucles for y while con diferentes patrones de iteración.
Practicar el uso de variables acumuladoras y operaciones dentro de bucles.

Descripción:
Resuelve los 5 desafíos usando bucles:
1. Imprimir números pares del 1 al 30
2. Imprimir múltiplos de 4 en orden descendente del 100 al 0
3. Imprimir la secuencia: 10, 7, 4, 1, -2, -5
4. Sumar todos los números pares del 1 al 50
5. Calcular el factorial de 20 (1 × 2 × 3 × ... × 20)

Habilidades que se practican:
- Bucles for con diferentes incrementos/decrementos
- Uso de variables acumuladoras
- Operador módulo para filtrar números
- Patrones de secuencias numéricas
*/

// ===================================
// DESAFÍO 1: Pares del 1 al 30
// ===================================
console.log("=== DESAFÍO 1: Números pares del 1 al 30 ===");

for (var i = 2; i <= 30; i += 2) {
    console.log(i);
}

// Alternativa usando módulo:
/*
for (var i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

console.log(""); // Línea en blanco para separar


// ===================================
// DESAFÍO 2: Múltiplos de 4 descendente (100 a 0)
// ===================================
console.log("=== DESAFÍO 2: Múltiplos de 4 del 100 al 0 ===");

for (var i = 100; i >= 0; i -= 4) {
    console.log(i);
}

console.log("");


// ===================================
// DESAFÍO 3: Secuencia 10, 7, 4, 1, -2, -5
// ===================================
console.log("=== DESAFÍO 3: Secuencia especial ===");

// Patrón: Cada número es 3 menos que el anterior
for (var i = 10; i >= -5; i -= 3) {
    console.log(i);
}

console.log("");


// ===================================
// DESAFÍO 4: Suma de pares del 1 al 50
// ===================================
console.log("=== DESAFÍO 4: Suma de pares del 1 al 50 ===");

var sumaPares = 0;  // Variable acumuladora

for (var i = 2; i <= 50; i += 2) {
    sumaPares += i;  // Equivale a: sumaPares = sumaPares + i
}

console.log("La suma de todos los números pares del 1 al 50 es: " + sumaPares);
// Resultado: 650

console.log("");


// ===================================
// DESAFÍO 5: Factorial de 20
// ===================================
console.log("=== DESAFÍO 5: Factorial de 20 (1 × 2 × 3 × ... × 20) ===");

var factorial = 1;  // Variable acumuladora (empezamos en 1, no en 0)

for (var i = 1; i <= 20; i++) {
    factorial *= i;  // Equivale a: factorial = factorial * i
}

console.log("El factorial de 20 es: " + factorial);
// Resultado: 2432902008176640000

console.log("");


/*
Resumen de resultados:

DESAFÍO 1 - Pares del 1 al 30:
2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30

DESAFÍO 2 - Múltiplos de 4 del 100 al 0:
100, 96, 92, 88, 84, 80, ..., 8, 4, 0

DESAFÍO 3 - Secuencia:
10, 7, 4, 1, -2, -5

DESAFÍO 4 - Suma de pares:
650

DESAFÍO 5 - Factorial de 20:
2432902008176640000

💡 Conceptos clave practicados:
- for con incremento/decremento personalizado (i += 2, i -= 4, i -= 3)
- Variables acumuladoras para suma (sumaPares) y producto (factorial)
- Bucles descendentes (i >= 0, i--)
- Operador módulo para filtrar números pares (i % 2 === 0)
*/

