from flask import render_template, redirect, session
from flask_app import app
from flask_app.models.viaje import Viaje
from flask_app.models.usuario import Usuario


@app.route("/ver/<int:id>")
def ver_viaje(id):
    session["usuario_id"] = 1 # Simular login

    viaje = Viaje.get_viaje_y_usuarios(id)
    return render_template("ver.html", viaje=viaje)

@app.route("/usuario/unirse/<int:usuario_id>/<int:viaje_id>", methods=["POST"])
def unirse_a_viaje(usuario_id, viaje_id):
    print(f"Usuario ID {usuario_id} | Viaje ID {viaje_id}")

    Usuario.save_usuario_viaje(usuario_id, viaje_id)

    return redirect(f"/ver/{usuario_id}")
