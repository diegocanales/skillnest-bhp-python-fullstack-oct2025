/**
 * EJERCICIO 00: PRIMEROS PASOS EN PROGRAMACIÓN
 * ============================================
 * 
 * OBJETIVOS:
 * - Entender qué son las variables
 * - Practicar operaciones matemáticas básicas
 * - Usar console.log para mostrar resultados
 * - Aplicar condicionales simples (if-else)
 * - Crear bucles básicos para repetir acciones
 * 
 * CONCEPTOS:
 * - Variables (var)
 * - Tipos de datos (números, texto, booleanos)
 * - Operadores aritméticos (+, -, *, /)
 * - Condicionales (if, else)
 * - Bucle for básico
 * - console.log()
 * 
 * DESCRIPCIÓN:
 * Este es tu primer ejercicio de lógica de programación.
 * Cada sección introduce un concepto nuevo de forma gradual.
 * Lee los comentarios y ejecuta el código paso a paso.
 */

console.log("=== 🚀 MIS PRIMEROS PASOS EN PROGRAMACIÓN ===");
console.log("");

// ============================================
// PARTE 1: VARIABLES Y OPERACIONES BÁSICAS
// ============================================
console.log("--- PARTE 1: Variables y Operaciones ---");

// Declarar variables con números
var numeroA = 10;
var numeroB = 5;

console.log("Número A:", numeroA);
console.log("Número B:", numeroB);

// Realizar operaciones matemáticas
var suma = numeroA + numeroB;
var resta = numeroA - numeroB;
var multiplicacion = numeroA * numeroB;
var division = numeroA / numeroB;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("");

// ============================================
// PARTE 2: TRABAJAR CON TEXTO
// ============================================
console.log("--- PARTE 2: Trabajar con Texto ---");

var nombre = "María";
var apellido = "González";
var edad = 25;

// Concatenar (unir) texto
var nombreCompleto = nombre + " " + apellido;
var presentacion = "Hola, soy " + nombreCompleto + " y tengo " + edad + " años";

console.log(presentacion);
console.log("");

// ============================================
// PARTE 3: PRIMERA CONDICIÓN (IF-ELSE)
// ============================================
console.log("--- PARTE 3: Mi Primera Condición ---");

var miEdad = 18;

console.log("Mi edad:", miEdad);

// Verificar si soy mayor de edad
if (miEdad >= 18) {
    console.log("✅ Soy mayor de edad");
} else {
    console.log("❌ Soy menor de edad");
}
console.log("");

// ============================================
// PARTE 4: COMPARAR NÚMEROS
// ============================================
console.log("--- PARTE 4: Comparar Números ---");

var numero1 = 15;
var numero2 = 20;

console.log("Número 1:", numero1);
console.log("Número 2:", numero2);

if (numero1 > numero2) {
    console.log("El número 1 es MAYOR que el número 2");
} else if (numero1 < numero2) {
    console.log("El número 1 es MENOR que el número 2");
} else {
    console.log("Los números son IGUALES");
}
console.log("");

// ============================================
// PARTE 5: MI PRIMER BUCLE
// ============================================
console.log("--- PARTE 5: Mi Primer Bucle ---");

console.log("Contando del 1 al 5:");
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("");

// ============================================
// PARTE 6: BUCLE CON MENSAJE
// ============================================
console.log("--- PARTE 6: Bucle con Mensaje ---");

console.log("Saludos múltiples:");
for (var i = 1; i <= 3; i++) {
    console.log(i + ". ¡Hola desde JavaScript!");
}
console.log("");

// ============================================
// PARTE 7: SUMAR NÚMEROS CON BUCLE
// ============================================
console.log("--- PARTE 7: Sumar Números del 1 al 5 ---");

var sumaTotal = 0;

for (var i = 1; i <= 5; i++) {
    sumaTotal = sumaTotal + i;
    console.log("Sumando", i, "- Total hasta ahora:", sumaTotal);
}

console.log("Suma total final:", sumaTotal);
console.log("");

// ============================================
// PARTE 8: BUCLE CON CONDICIÓN
// ============================================
console.log("--- PARTE 8: Números Pares del 1 al 10 ---");

console.log("Solo números pares:");
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i, "es par ✓");
    }
}
console.log("");

// ============================================
// PARTE 9: CONTAR NÚMEROS POSITIVOS
// ============================================
console.log("--- PARTE 9: Contar Números Positivos ---");

var numeros = [5, -3, 8, -1, 0, 12, -7, 4];
var contadorPositivos = 0;

console.log("Lista de números:", numeros);

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        contadorPositivos++;
        console.log(numeros[i], "es positivo");
    }
}

console.log("Total de números positivos:", contadorPositivos);
console.log("");

// ============================================
// PARTE 10: DESAFÍO FINAL
// ============================================
console.log("--- PARTE 10: DESAFÍO FINAL ---");
console.log("Encontrar el número más grande:");

var listaNumeros = [3, 15, 7, 22, 9, 5];
var mayorNumero = listaNumeros[0]; // Empezamos con el primer número

console.log("Lista:", listaNumeros);
console.log("Empezamos con:", mayorNumero);

for (var i = 1; i < listaNumeros.length; i++) {
    console.log("Comparando", mayorNumero, "con", listaNumeros[i]);
    
    if (listaNumeros[i] > mayorNumero) {
        mayorNumero = listaNumeros[i];
        console.log("  → ¡Nuevo número mayor encontrado:", mayorNumero + "!");
    } else {
        console.log("  →", mayorNumero, "sigue siendo el mayor");
    }
}

console.log("");
console.log("🏆 El número más grande es:", mayorNumero);
console.log("");

// ============================================
// RESUMEN
// ============================================
console.log("=== ✅ ¡FELICITACIONES! ===");
console.log("");
console.log("Has completado tu primer ejercicio de programación.");
console.log("Conceptos que practicaste:");
console.log("  ✓ Variables y tipos de datos");
console.log("  ✓ Operaciones matemáticas");
console.log("  ✓ Condicionales (if-else)");
console.log("  ✓ Bucles (for)");
console.log("  ✓ Lógica básica");
console.log("");
console.log("¡Ahora estás listo para desafíos más complejos! 🚀");

