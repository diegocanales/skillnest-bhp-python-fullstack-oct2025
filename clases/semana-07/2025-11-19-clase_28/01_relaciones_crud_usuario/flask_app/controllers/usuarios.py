from flask import render_template, request, redirect
from flask_app.models.usuario import Usuario
from flask_app import app

@app.route("/usuarios")
def mostrar_usuarios():
    usuarios = Usuario.get_all()
    return render_template("usuarios/dashboard_tabla.html", usuarios=usuarios)


@app.route("/usuarios/<int:id>")
def mostrar_usuario(id):
    usuario = Usuario.get_one(id)
    if not usuario:
        return redirect("/usuarios")
    return render_template("usuarios/ver_usuario.html", usuario=usuario)


@app.route("/usuarios/nuevo")
def nuevo_usuario():
    return render_template("usuarios/nuevo_usuario.html")


@app.route("/usuarios/crear", methods=["POST"])
def crear_usuario():
    nombre = request.form["nombre"]
    apellido = request.form["apellido"]
    email = request.form["email"]
    edad = int(request.form["edad"])

    data = {
        "nombre": nombre,
        "apellido": apellido,
        "email": email,
        "edad": edad
    }
    id_nuevo_usuario = Usuario.save(datos=data)
    
    return redirect("/usuarios")

@app.route("/usuarios/editar/<int:id>")
def editar_usuario(id):
    usuario = Usuario.get_one(id)
    if not usuario:
        return redirect("/usuarios")
    return render_template("usuarios/editar_usuario.html", usuario=usuario)


@app.route("/usuarios/actualizar", methods=["POST"])
def actualizar_usuario():
    id = int(request.form["id"])
    nombre = request.form["nombre"]
    apellido = request.form["apellido"]
    email = request.form["email"]
    edad = int(request.form["edad"])

    data = {
        "id": id,
        "nombre": nombre,
        "apellido": apellido,
        "email": email,
        "edad": edad
    }
    Usuario.update(data)
    
    return redirect("/usuarios")


@app.route("/usuarios/eliminar/<int:id>", methods=["POST"])
def eliminar_usuario(id):
    usuario = Usuario.get_one(id)
    if usuario:
        Usuario.delete(id)
    return redirect("/usuarios")