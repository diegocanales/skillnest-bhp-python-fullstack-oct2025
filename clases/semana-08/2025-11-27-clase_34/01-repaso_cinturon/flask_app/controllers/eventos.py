from flask_app import app
from flask import render_template, redirect, flash, request
from flask_app.models.evento import Evento

@app.route("/")
def index():
    # TODO: hay que hacer algo
    return render_template("index.html")


@app.route("/eventos")
def mostrar_eventos():
    # TODO: hay que hacer algo
    todos_los_eventos = Evento.get_all_eventos_y_usuarios()
    return render_template("eventos.html", eventos=todos_los_eventos)


@app.route("/nuevo")
def nuevo_evento():
    return render_template("nuevo_evento.html")


@app.route("/eventos/crear", methods=["POST"])
def crear_evento():
    # session["form_data"] = request.form.to_dict()

    data = {
        "evento": request.form["evento"],
        "ubicacion": request.form["ubicacion"],
        "fecha": request.form["fecha"],
        "detalles": request.form["detalles"],
        "usuario_id": 1 # TODO: implementar obtencion de usuario desde la vista.
    }

    print(data)

    # if not Evento.validar_usuario(data):
    #    return redirect("/eventos/nuevo")

    # session.pop('form_data', None)
    id_nuevo_evento = Evento.save(data)
    
    return redirect("/eventos")


@app.route("/ver/<int:id>")
def ver_evento(id):
    data = {"id": id}
    evento = Evento.get_evento_y_usuario(data)
    if evento is None:
        flash(f"El evento con id {id} no existe")
        return redirect("/eventos")
    return render_template("ver_evento.html", evento=evento)


@app.route("/editar/<int:id>")
def editar_evento(id):
    evento = Evento.get_one(id)
    if not evento:
        redirect("/eventos")
    return render_template("editar_evento.html", evento=evento)

@app.route("/eventos/actualizar", methods=["POST"])
def actualizar_evento():
    data = {
        "id": int(request.form["id"]),
        "evento": request.form["evento"],
        "ubicacion": request.form["ubicacion"],
        "fecha": request.form["fecha"],
        "detalles": request.form["detalles"],
        "usuario_id": 1 # TODO: implementar obtencion de usuario desde la vista.
    }

    id_nuevo_evento = Evento.update(data)
    
    return redirect("/eventos")


@app.route("/eliminar/<int:id>", methods=["POST"])
def eliminar_evento(id):
    evento = Evento.get_one(id)
    if evento:
        Evento.delete(id)
    return redirect("/eventos")