from flask import render_template
from flask_app import app
from flask_app.models.restaurante import Restaurante

@app.route('/restaurante/mostrar/<int:restaurante_id>')
def mostrar_restaurante(restaurante_id):
    datos = {
        'id': restaurante_id
    }
    restaurante = Restaurante.get_restaurante_y_tacos(datos)
    return render_template("restaurante/ver.html", restaurante = restaurante)