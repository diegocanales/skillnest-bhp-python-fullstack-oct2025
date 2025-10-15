/*
Ejercicio: FizzBuzz Clásico

Objetivo:
Practicar el uso de bucles, condicionales y el operador módulo (%).
Este es uno de los ejercicios clásicos de programación que ayuda a desarrollar
el pensamiento lógico y entender cómo combinar diferentes estructuras de control.

Descripción:
Crea un programa que imprima los números del 1 al 30, pero con las siguientes reglas:
- Si el número es divisible por 3, imprime "Fizz"
- Si el número es divisible por 5, imprime "Buzz"
- Si el número es divisible por 3 Y por 5, imprime "FizzBuzz"
- Si no cumple ninguna condición, imprime el número

Habilidades que se practican:
- Uso de bucles for
- Condicionales if, else if, else
- Operador módulo (%) para verificar divisibilidad
- Operadores lógicos (&&)
- Orden de evaluación de condiciones
*/

// Solución: FizzBuzz del 1 al 30

for (let i = 1; i <= 30; i++) {
    // IMPORTANTE: Primero verificamos si es divisible por AMBOS (3 y 5)
    // Si verificáramos primero solo por 3 o solo por 5, nunca llegaríamos a FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // Luego verificamos si es divisible solo por 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // Luego verificamos si es divisible solo por 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // Si no cumple ninguna condición, imprimimos el número
    else {
        console.log(i);
    }
}

/*
Salida esperada:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz

Explicación del flujo:
- i = 1: No es divisible por 3 ni por 5 → Imprime 1
- i = 3: Es divisible por 3 → Imprime "Fizz"
- i = 5: Es divisible por 5 → Imprime "Buzz"
- i = 15: Es divisible por 3 Y por 5 → Imprime "FizzBuzz"
- i = 30: Es divisible por 3 Y por 5 → Imprime "FizzBuzz"

💡 Tip: Puedes modificar el rango del bucle para hacer FizzBuzz del 1 al 100
*/

