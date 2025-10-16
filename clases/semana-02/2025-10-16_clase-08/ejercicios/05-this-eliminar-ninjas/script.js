/*
Script para eliminar ninjas al hacer clic

Este código:
1. Selecciona TODOS los elementos con la clase "ninja"
2. Usa forEach para iterar sobre cada ninja
3. Agrega un evento click a cada ninja individualmente
4. Cuando se hace clic, usa "this" para referenciar el ninja específico
5. Elimina el ninja clickeado con remove()
*/

// Seleccionar todos los ninjas
const ninjas = document.querySelectorAll(".ninja");

// Mensaje inicial en consola
console.log(`Se encontraron ${ninjas.length} ninjas en el dojo`);

// forEach itera sobre cada elemento de la lista
ninjas.forEach(function(ninja) {
    ninja.addEventListener("click", function() {
        // Mensaje en consola
        console.log("¡Ninja eliminado! 💨");
        
        // Eliminar el ninja inmediatamente
        this.remove();
        
        // Verificar cuántos ninjas quedan
        const ninjasRestantes = document.querySelectorAll(".ninja").length;
        console.log(`Ninjas restantes: ${ninjasRestantes}`);
        
        // Si no quedan ninjas, mostrar mensaje
        if (ninjasRestantes === 0) {
            const dojo = document.getElementById("dojo");
            const mensaje = document.createElement("p");
            mensaje.textContent = "¡Todos los ninjas han desaparecido!";
            mensaje.className = "mensaje-final";
            dojo.appendChild(mensaje);
            
            console.log("🎉 ¡Todos los ninjas han desaparecido!");
        }
    }, { once: true }); // Asegura que el evento solo se ejecute una vez
});