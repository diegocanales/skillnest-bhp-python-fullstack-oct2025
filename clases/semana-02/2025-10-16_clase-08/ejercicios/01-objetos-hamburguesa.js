/*
Ejercicio 1: Objetos - Hamburguesa con Propiedades y Métodos

Objetivo:
Practicar la creación de objetos con propiedades y métodos.
Aprender a usar "this" dentro de métodos para referenciar al objeto.

Descripción:
Crear un objeto que represente una hamburguesa con sus ingredientes
y un método para mostrar toda su información de forma organizada.

Habilidades que se practican:
- Crear objetos literales
- Definir propiedades con diferentes tipos de datos
- Crear métodos dentro de objetos
- Usar la palabra clave "this"
- Usar el método join() para unir elementos de un arreglo
*/

// Hamburguesa Clásica
var hamburguesaClasica = {
    "pan": "pan con semillas de sésamo",
    "carne": "carne de res 100%",
    "queso": "queso cheddar",
    "extras": ["lechuga", "tomate", "cebolla", "salsa especial"],
    
    // Método para mostrar la información de la hamburguesa
    "infoHamburguesa": function() {
        console.log("=== HAMBURGUESA CLÁSICA ===");
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(", "));
        console.log("===========================\n");
    }
};

// Hamburguesa Especial
var hamburguesaEspecial = {
    "pan": "pan brioche",
    "carne": "carne angus premium",
    "queso": "queso azul",
    "extras": ["cebolla caramelizada", "bacon", "rúcula", "mayonesa de ajo"],
    
    "infoHamburguesa": function() {
        console.log("=== HAMBURGUESA ESPECIAL ===");
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(", "));
        console.log("============================\n");
    }
};

// Hamburguesa Vegetariana
var hamburguesaVegetariana = {
    "pan": "pan integral",
    "carne": "hamburguesa de lentejas",
    "queso": "queso feta",
    "extras": ["aguacate", "espinaca", "tomate", "hummus"],
    
    "infoHamburguesa": function() {
        console.log("=== HAMBURGUESA VEGETARIANA ===");
        console.log("Pan: " + this.pan);
        console.log("Carne: " + this.carne);
        console.log("Queso: " + this.queso);
        console.log("Extras: " + this.extras.join(", "));
        console.log("===============================\n");
    }
};

// Llamar a los métodos para mostrar la información
hamburguesaClasica.infoHamburguesa();
hamburguesaEspecial.infoHamburguesa();
hamburguesaVegetariana.infoHamburguesa();

// Ejemplo de acceso a propiedades individuales
console.log("Mi hamburguesa favorita tiene " + hamburguesaClasica.queso);
console.log("La hamburguesa especial usa " + hamburguesaEspecial.pan);

