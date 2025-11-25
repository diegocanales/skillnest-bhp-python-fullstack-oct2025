from flask_app import app
from flask import render_template

@app.route("/")
def index():
    # TODO: hay que hacer algo
    return render_template("index.html")


@app.route("/eventos")
def mostrar_eventos():
    # TODO: hay que hacer algo
    return render_template("eventos.html")


@app.route("/nuevo")
def nuevo_evento():
    # TODO: hay que hacer algo
    return render_template("nuevo_evento.html")

@app.route("/ver")
def ver_evento():
    # TODO: hay que hacer algo
    return render_template("ver_evento.html")


@app.route("/editar")
def editar_evento():
    # TODO: hay que hacer algo
    return render_template("editar_evento.html")