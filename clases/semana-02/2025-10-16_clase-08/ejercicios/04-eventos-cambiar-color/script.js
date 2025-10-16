/*
Script para cambiar el color de fondo al hacer clic en el botón

Este código:
1. Selecciona el botón por su ID
2. Agrega un evento de click al botón
3. Cuando se hace clic, llama a la función cambiarColor()
4. La función elige un color aleatorio y lo aplica al fondo
*/

// Seleccionar el botón por su ID
var botonColor = document.getElementById("colorButton");

// Agregar un evento de click al botón
botonColor.addEventListener("click", function() {
    // Cuando se hace clic, ejecutar la función cambiarColor
    cambiarColor();
});

// Función que cambia el color de fondo
function cambiarColor() {
    // Arreglo con colores en formato hexadecimal
    var colores = [
        "#FF6347",  // Tomate
        "#66CDAA",  // Verde Claro
        "#9370DB",  // Púrpura Medio
        "#FFD700",  // Dorado
        "#4682B4",  // Azul Acero
        "#FFA07A"   // Salmón Claro
    ];
    
    // Generar un índice aleatorio
    // Math.random() genera un número entre 0 y 1
    // Multiplicamos por la cantidad de colores
    // Math.floor() redondea hacia abajo para obtener un número entero
    var indiceAleatorio = Math.floor(Math.random() * colores.length);
    
    // Obtener el color en la posición aleatoria
    var colorAleatorio = colores[indiceAleatorio];
    
    // Aplicar el color al fondo del body
    document.body.style.backgroundColor = colorAleatorio;
    
    // Mostrar en consola qué color se eligió (para debug)
    console.log("Color elegido: " + colorAleatorio);
}

// Mensaje en consola al cargar la página
console.log("🎨 Página cargada. Haz clic en el botón para cambiar el color de fondo.");

