/*
Ejercicio 3: Funciones Básicas - Parámetros y Return

Objetivo:
Practicar la creación de funciones con parámetros.
Entender el uso de return para devolver valores.
Aprender a usar funciones para resolver problemas matemáticos.

Descripción:
Crear diferentes funciones que realizan cálculos y devuelven resultados.
Cada función debe recibir parámetros y usar return correctamente.

Habilidades que se practican:
- Definir funciones con parámetros
- Usar return para devolver valores
- Llamar funciones y guardar sus resultados
- Operaciones matemáticas básicas
- Lógica condicional dentro de funciones
*/

// Función 1: Saludar a una persona
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "! Bienvenido al bootcamp 🎉");
}

// Función 2: Calcular el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
    var area = base * altura;
    return area;
}

// Función 3: Calcular el perímetro de un rectángulo
function calcularPerimetroRectangulo(base, altura) {
    var perimetro = 2 * (base + altura);
    return perimetro;
}

// Función 4: Encontrar el mayor entre dos números
function encontrarMaximo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Función 5: Encontrar el menor entre dos números
function encontrarMinimo(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// Función 6: Calcular el promedio de tres números
function calcularPromedio(num1, num2, num3) {
    var suma = num1 + num2 + num3;
    var promedio = suma / 3;
    return promedio;
}

// Función 7: Verificar si un número es par
function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Función 8: Convertir temperatura de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// ========================================
// PROBANDO LAS FUNCIONES
// ========================================

console.log("=== PRUEBA DE FUNCIONES ===\n");

// Probar saludar
saludar("Ana");
saludar("Carlos");
console.log("");

// Probar cálculo de área
var area1 = calcularAreaRectangulo(5, 3);
console.log("Área del rectángulo (5 x 3): " + area1);

var area2 = calcularAreaRectangulo(10, 7);
console.log("Área del rectángulo (10 x 7): " + area2);
console.log("");

// Probar cálculo de perímetro
var perimetro1 = calcularPerimetroRectangulo(5, 3);
console.log("Perímetro del rectángulo (5 x 3): " + perimetro1);
console.log("");

// Probar encontrar máximo
var maximo = encontrarMaximo(15, 23);
console.log("El máximo entre 15 y 23 es: " + maximo);

// Probar encontrar mínimo
var minimo = encontrarMinimo(15, 23);
console.log("El mínimo entre 15 y 23 es: " + minimo);
console.log("");

// Probar calcular promedio
var promedio = calcularPromedio(8, 9, 7);
console.log("El promedio de 8, 9 y 7 es: " + promedio);
console.log("");

// Probar si es par
console.log("¿El 10 es par? " + esPar(10));
console.log("¿El 7 es par? " + esPar(7));
console.log("");

// Probar conversión de temperatura
var tempFahrenheit = celsiusAFahrenheit(25);
console.log("25°C son " + tempFahrenheit + "°F");

var tempFahrenheit2 = celsiusAFahrenheit(0);
console.log("0°C son " + tempFahrenheit2 + "°F");

