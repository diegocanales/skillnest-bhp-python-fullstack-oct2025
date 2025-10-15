/**
 * PRÁCTICA 00: PRIMEROS PASOS EN PROGRAMACIÓN
 * ============================================
 * 
 * INSTRUCCIONES:
 * Completa los ejercicios siguiendo los comentarios.
 * Ejecuta el archivo para verificar tus resultados.
 * 
 * AYUDA:
 * Si te atascas, revisa el archivo 00-primeros-pasos.js
 */

console.log("=== 🚀 MI PRÁCTICA DE PRIMEROS PASOS ===");
console.log("");

// ============================================
// EJERCICIO 1: TUS PROPIAS VARIABLES
// ============================================
console.log("--- EJERCICIO 1: Mis Variables ---");

// TODO: Crea una variable con tu edad
var miEdad = // Escribe tu edad aquí

// TODO: Crea una variable con tu nombre
var miNombre = // Escribe tu nombre entre comillas

// TODO: Muestra tu nombre y edad en la consola
console.log("Mi nombre es:", /* tu variable aquí */);
console.log("Mi edad es:", /* tu variable aquí */);
console.log("");

// ============================================
// EJERCICIO 2: CALCULADORA BÁSICA
// ============================================
console.log("--- EJERCICIO 2: Mi Calculadora ---");

// TODO: Crea dos variables con números que te gusten
var primerNumero = // Tu número aquí
var segundoNumero = // Tu número aquí

// TODO: Calcula la suma de los dos números
var resultado = // Escribe la operación aquí

console.log(primerNumero, "+", segundoNumero, "=", resultado);
console.log("");

// ============================================
// EJERCICIO 3: ¿MAYOR O MENOR?
// ============================================
console.log("--- EJERCICIO 3: Comparar Edades ---");

var edadPersona1 = 25;
var edadPersona2 = 30;

console.log("Persona 1 tiene:", edadPersona1, "años");
console.log("Persona 2 tiene:", edadPersona2, "años");

// TODO: Completa la condición para saber quién es mayor
if (edadPersona1 > edadPersona2) {
    console.log("La persona 1 es mayor");
} else {
    console.log(/* Tu mensaje aquí */);
}
console.log("");

// ============================================
// EJERCICIO 4: CUENTA REGRESIVA
// ============================================
console.log("--- EJERCICIO 4: Cuenta Regresiva ---");

console.log("Contando del 5 al 1:");

// TODO: Completa el bucle para contar de 5 a 1
for (var i = 5; /* condición aquí */; i--) {
    console.log(i);
}

console.log("¡Despegue! 🚀");
console.log("");

// ============================================
// EJERCICIO 5: NÚMEROS IMPARES
// ============================================
console.log("--- EJERCICIO 5: Solo Números Impares ---");

console.log("Números impares del 1 al 10:");

// TODO: Completa el código para mostrar solo números impares
for (var i = 1; i <= 10; i++) {
    if (i % 2 !== 0) { // !== 0 significa "no es par"
        console.log(/* muestra el número aquí */);
    }
}
console.log("");

// ============================================
// EJERCICIO 6: SUMA DE TUS NÚMEROS FAVORITOS
// ============================================
console.log("--- EJERCICIO 6: Suma de Números ---");

// TODO: Crea un arreglo con 5 números que te gusten
var misNumeros = [/* escribe 5 números separados por comas */];

var sumaTotal = 0;

// TODO: Completa el bucle para sumar todos los números
for (var i = 0; i < misNumeros.length; i++) {
    sumaTotal = // Suma aquí
    console.log("Sumando:", misNumeros[i], "- Total:", sumaTotal);
}

console.log("Suma total:", sumaTotal);
console.log("");

// ============================================
// EJERCICIO 7: ENCONTRAR EL NÚMERO MENOR
// ============================================
console.log("--- EJERCICIO 7: DESAFÍO - Número Más Pequeño ---");

var numeros = [45, 12, 78, 3, 56, 23];
var numeroMenor = numeros[0];

console.log("Lista:", numeros);

// TODO: Completa el algoritmo para encontrar el número más pequeño
for (var i = 1; i < numeros.length; i++) {
    if (/* tu condición aquí */) {
        numeroMenor = numeros[i];
        console.log("Nuevo número menor:", numeroMenor);
    }
}

console.log("🏆 El número más pequeño es:", numeroMenor);
console.log("");

// ============================================
// RETO FINAL
// ============================================
console.log("--- RETO FINAL: Tabla de Multiplicar ---");

var numeroTabla = 5; // Puedes cambiar este número

console.log("Tabla del", numeroTabla + ":");

// TODO: Crea un bucle que muestre la tabla de multiplicar
// Ejemplo: 5 x 1 = 5, 5 x 2 = 10, etc. (del 1 al 10)

for (var i = 1; i <= 10; i++) {
    var resultado = // Calcula aquí
    console.log(numeroTabla, "x", i, "=", resultado);
}

console.log("");
console.log("=== ✅ ¡PRÁCTICA COMPLETADA! ===");

