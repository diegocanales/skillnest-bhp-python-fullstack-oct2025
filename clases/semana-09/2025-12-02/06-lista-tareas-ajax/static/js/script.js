function cargarTareas() {
    // Mostrar mensaje de carga
    const tareasDiv = document.getElementById('tareas');
    tareasDiv.innerHTML = '<p class="loading">⏳ Cargando tareas...</p>';

    // Hacer solicitud GET a Flask
    fetch('http://localhost:5000/api/tareas')
        .then(response => response.json())
        .then(data => {
            // Verificar si hay tareas
            if (data.tareas.length === 0) {
                tareasDiv.innerHTML = '<p class="mensaje-inicial">No hay tareas todavía</p>';
                return;
            }

            // Crear lista HTML con las tareas
            let html = '<ul class="lista-tareas">';
            data.tareas.forEach((tarea, index) => {
                html += `
                    <li>
                        <span class="numero">${index + 1}.</span>
                        <span class="texto">${tarea}</span>
                    </li>
                `;
            });
            html += '</ul>';

            // Actualizar el DOM
            tareasDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
            tareasDiv.innerHTML = '<p class="error">❌ Error al cargar tareas</p>';
        });
}

function agregarTarea(e) {
    // Prevenir recarga de página
    e.preventDefault();

    // Obtener el formulario
    const formulario = document.getElementById('formularioTarea');

    // Crear FormData con los datos del formulario
    const formData = new FormData(formulario);

    // Enviar POST a Flask
    fetch('http://localhost:5000/api/tareas', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Mostrar mensaje de éxito
            alert('✅ ' + data.mensaje);

            // Limpiar el formulario
            formulario.reset();

            // Recargar la lista de tareas
            cargarTareas();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('❌ Error al agregar la tarea');
        });
}

