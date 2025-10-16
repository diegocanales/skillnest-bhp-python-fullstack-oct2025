/*
Script para cambiar el texto de botones usando "this"

Este código demuestra diferentes usos de "this" en eventos:
- Cambiar texto simple
- Mostrar la hora actual
- Crear un contador
- Cambiar colores
- Sistema de likes
*/

// ===================================
// BOTÓN 1: SALUDO SIMPLE
// ===================================
var botonSaludo = document.querySelector(".boton-magico[data-mensaje]");

botonSaludo.addEventListener("click", function() {
    // Cambiar el texto del botón usando this
    this.innerText = this.getAttribute("data-mensaje");
});

// ===================================
// BOTÓN 2: MOSTRAR HORA ACTUAL
// ===================================
var botonHora = document.querySelector(".boton-magico.hora");

botonHora.addEventListener("click", function() {
    // Obtener la hora actual
    var ahora = new Date();
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();
    
    // Formatear con ceros a la izquierda si es necesario
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;
    
    // Cambiar el texto usando this
    this.innerText = "🕐 " + horas + ":" + minutos + ":" + segundos;
});

// ===================================
// BOTÓN 3: CONTADOR
// ===================================
var botonContador = document.querySelector(".boton-magico.contador");

botonContador.addEventListener("click", function() {
    // Obtener el texto actual
    var textoActual = this.innerText;
    
    // Extraer el número (después de "Contador: ")
    var numero = parseInt(textoActual.split(": ")[1]);
    
    // Incrementar el número
    numero++;
    
    // Actualizar el texto usando this
    this.innerText = "Contador: " + numero;
});

// ===================================
// BOTÓN 4: CAMBIAR COLOR ALEATORIO
// ===================================
var botonColor = document.querySelector(".boton-magico.color");

botonColor.addEventListener("click", function() {
    // Colores disponibles
    var colores = ["#FF6347", "#66CDAA", "#9370DB", "#FFD700", "#FF69B4", "#20B2AA"];
    
    // Elegir color aleatorio
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    // Cambiar el color de fondo del botón usando this
    this.style.backgroundColor = colorAleatorio;
    this.style.color = "white";
    
    // Cambiar el texto
    this.innerText = "¡Color cambiado! 🎨";
});

// ===================================
// BOTÓN 5: SISTEMA DE LIKES
// ===================================
var botonLike = document.querySelector(".boton-magico.like");

botonLike.addEventListener("click", function() {
    // Obtener el texto actual
    var textoActual = this.innerText;
    
    // Extraer el número de likes (entre "❤️ " y " Likes")
    var likes = parseInt(textoActual.split(" ")[1]);
    
    // Incrementar likes
    likes++;
    
    // Actualizar el texto usando this
    this.innerText = "❤️ " + likes + " Likes";
    
    // Agregar efecto visual
    this.style.transform = "scale(1.2)";
    setTimeout(function() {
        botonLike.style.transform = "scale(1)";
    }, 200);
});

// ===================================
// BOTÓN 6: TOGGLE (CAMBIAR ESTADO)
// ===================================
var botonReset = document.querySelector(".boton-magico.reset");
var clickeado = false;

botonReset.addEventListener("click", function() {
    // Cambiar el estado
    clickeado = !clickeado;
    
    // Cambiar el texto según el estado usando this
    if (clickeado) {
        this.innerText = "¿Clickeado? Sí ✅";
        this.style.backgroundColor = "#2ecc71";
        this.style.color = "white";
    } else {
        this.innerText = "¿Clickeado? No ❌";
        this.style.backgroundColor = "white";
        this.style.color = "#667eea";
    }
});

// Mensaje en consola
console.log("✨ Página cargada. Todos los botones están listos.");
console.log("🎯 Cada botón usa 'this' para referenciarse a sí mismo.");

