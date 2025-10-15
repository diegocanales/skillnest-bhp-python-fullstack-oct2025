/*
Ejercicio: Gestión de Lista de Tareas

Objetivo:
Practicar operaciones básicas con arreglos: crear, agregar, eliminar, acceder y recorrer elementos.
Entender cómo usar .push(), .pop(), .length y acceso por índice.

Descripción:
Crea un programa que gestione una lista de tareas pendientes:
1. Crear un arreglo con 3 tareas iniciales
2. Agregar 2 tareas más con .push()
3. Mostrar el total de tareas
4. Recorrer e imprimir cada tarea numerada
5. Eliminar la última tarea con .pop()
6. Mostrar el arreglo final

Habilidades que se practican:
- Crear arreglos con valores iniciales
- Método .push() para agregar elementos
- Método .pop() para eliminar el último elemento
- Propiedad .length para contar elementos
- Bucle for para recorrer arreglos
- Acceso a elementos por índice
*/

// ===================================
// PASO 1: Crear arreglo con 3 tareas
// ===================================
var tareas = [
    "Estudiar JavaScript",
    "Hacer ejercicio",
    "Leer un libro"
];

console.log("=== LISTA DE TAREAS ===\n");
console.log("Tareas iniciales:");
console.log(tareas);
console.log("");


// ===================================
// PASO 2: Agregar 2 tareas más
// ===================================
tareas.push("Practicar programación");
tareas.push("Revisar correos");

console.log("Después de agregar 2 tareas:");
console.log(tareas);
console.log("");


// ===================================
// PASO 3: Mostrar total de tareas
// ===================================
console.log("Total de tareas: " + tareas.length);
console.log("");


// ===================================
// PASO 4: Recorrer y mostrar cada tarea numerada
// ===================================
console.log("📋 LISTA COMPLETA DE TAREAS:");
console.log("─────────────────────────────");

for (var i = 0; i < tareas.length; i++) {
    // i + 1 porque queremos numerar desde 1, no desde 0
    console.log((i + 1) + ". " + tareas[i]);
}

console.log("");


// ===================================
// PASO 5: Eliminar la última tarea
// ===================================
var tareaEliminada = tareas.pop();

console.log("Tarea eliminada: " + tareaEliminada);
console.log("");


// ===================================
// PASO 6: Mostrar arreglo final
// ===================================
console.log("📋 LISTA FINAL DE TAREAS:");
console.log("─────────────────────────────");

for (var i = 0; i < tareas.length; i++) {
    console.log((i + 1) + ". " + tareas[i]);
}

console.log("");
console.log("Total de tareas pendientes: " + tareas.length);


/*
Salida esperada:

=== LISTA DE TAREAS ===

Tareas iniciales:
[ 'Estudiar JavaScript', 'Hacer ejercicio', 'Leer un libro' ]

Después de agregar 2 tareas:
[ 'Estudiar JavaScript', 'Hacer ejercicio', 'Leer un libro', 'Practicar programación', 'Revisar correos' ]

Total de tareas: 5

📋 LISTA COMPLETA DE TAREAS:
─────────────────────────────
1. Estudiar JavaScript
2. Hacer ejercicio
3. Leer un libro
4. Practicar programación
5. Revisar correos

Tarea eliminada: Revisar correos

📋 LISTA FINAL DE TAREAS:
─────────────────────────────
1. Estudiar JavaScript
2. Hacer ejercicio
3. Leer un libro
4. Practicar programación

Total de tareas pendientes: 4

💡 Conceptos clave practicados:
- Arreglo inicial: var tareas = ["tarea1", "tarea2"]
- Agregar al final: tareas.push("nueva tarea")
- Eliminar del final: tareas.pop()
- Contar elementos: tareas.length
- Recorrer con for: for (var i = 0; i < tareas.length; i++)
- Acceder a elemento: tareas[i]
*/

