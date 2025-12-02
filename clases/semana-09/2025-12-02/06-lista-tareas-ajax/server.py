from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Lista de tareas en memoria (se borra al reiniciar el servidor)
tareas = ["Estudiar Python", "Hacer ejercicios de AJAX", "Practicar Flask"]

@app.route('/')
def index():
    """Ruta principal que muestra la página HTML"""
    return render_template('index.html')

@app.route('/api/tareas')
def obtener_tareas():
    """
    Ruta GET que devuelve todas las tareas en formato JSON
    JavaScript consultará esta ruta para obtener la lista actualizada
    """
    return jsonify(tareas=tareas)

@app.route('/api/tareas', methods=['POST'])
def crear_tarea():
    """
    Ruta POST que recibe una nueva tarea y la agrega a la lista
    JavaScript enviará el formulario a esta ruta
    """
    # Obtener la tarea del formulario
    nueva_tarea = request.form['tarea']
    
    # Agregar a la lista
    tareas.append(nueva_tarea)
    
    # Responder con JSON
    return jsonify(
        mensaje="¡Tarea agregada exitosamente!",
        tareas=tareas
    )

if __name__ == "__main__":
    app.run(debug=True)

