/*
Ejercicio 2: Factory Function - Fábrica de Pizzas

Objetivo:
Aprender a crear funciones que generan objetos (factory functions).
Practicar el retorno de objetos desde funciones.
Evitar la repetición de código al crear objetos similares.

Descripción:
Crear una función "pizzaOven" que funciona como un horno de pizzas.
La función recibe los ingredientes y devuelve un objeto pizza completo.

Habilidades que se practican:
- Crear factory functions
- Usar parámetros en funciones
- Devolver objetos con return
- Crear múltiples objetos con la misma estructura
- Trabajar con arreglos como propiedades
*/

// Función Factory para crear pizzas
function pizzaOven(tipoCorteza, salsa, quesos, toppings) {
    // Crear un objeto vacío
    var pizza = {};
    
    // Asignar propiedades con los parámetros recibidos
    pizza.tipoCorteza = tipoCorteza;
    pizza.salsa = salsa;
    pizza.quesos = quesos;
    pizza.toppings = toppings;
    
    // Método para mostrar la información de la pizza
    pizza.mostrarPizza = function() {
        console.log("🍕 PIZZA RECIÉN HORNEADA 🍕");
        console.log("Corteza: " + this.tipoCorteza);
        console.log("Salsa: " + this.salsa);
        console.log("Quesos: " + this.quesos.join(", "));
        console.log("Toppings: " + this.toppings.join(", "));
        console.log("================================\n");
    };
    
    // Devolver el objeto pizza completo
    return pizza;
}

// Pizza 1: Estilo Chicago - Clásica
var pizza1 = pizzaOven(
    "estilo Chicago", 
    "tradicional", 
    ["mozzarella"], 
    ["pepperoni", "salchicha"]
);

// Pizza 2: Vegetariana Mediterránea
var pizza2 = pizzaOven(
    "lanzada a mano", 
    "marinara", 
    ["mozzarella", "feta"], 
    ["champiñones", "aceitunas", "cebollas"]
);

// Pizza 3: Hawaiana (la controversia)
var pizza3 = pizzaOven(
    "masa delgada",
    "salsa de tomate",
    ["mozzarella", "queso crema"],
    ["jamón", "piña", "tocino"]
);

// Pizza 4: Cuatro Quesos
var pizza4 = pizzaOven(
    "masa gruesa",
    "salsa blanca",
    ["mozzarella", "parmesano", "gorgonzola", "provolone"],
    ["orégano", "albahaca"]
);

// Mostrar todas las pizzas
console.log("=== MENÚ DE PIZZAS DEL DÍA ===\n");
pizza1.mostrarPizza();
pizza2.mostrarPizza();
pizza3.mostrarPizza();
pizza4.mostrarPizza();

// Ejemplo: Acceder a propiedades específicas
console.log("La primera pizza tiene corteza: " + pizza1.tipoCorteza);
console.log("La pizza vegetariana lleva: " + pizza2.toppings.length + " toppings");

