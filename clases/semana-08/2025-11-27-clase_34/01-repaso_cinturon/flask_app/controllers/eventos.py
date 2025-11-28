from flask_app import app, bcrypt
from flask import render_template, redirect, flash, request, session
from flask_app.models.evento import Evento
from flask_app.models.usuario import Usuario


@app.route("/")
def index():
    # TODO: hay que hacer algo
    return render_template("index.html")


@app.route("/eventos")
def mostrar_eventos():
    if "usuario_id" not in session: # Si no hay id de usuario en la session
        flash("Debes iniciar sesión para acceder", "error")
        return redirect("/")

    # TODO: hay que hacer algo
    todos_los_eventos = Evento.get_all_eventos_y_usuarios()
    return render_template("eventos.html", eventos=todos_los_eventos)


@app.route("/nuevo")
def nuevo_evento():
    if "usuario_id" not in session: # Si no hay id de usuario en la session
        flash("Debes iniciar sesión para acceder", "error")
        return redirect("/")
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
    if "usuario_id" not in session: # Si no hay id de usuario en la session
        flash("Debes iniciar sesión para acceder", "error")
        return redirect("/")
    data = {"id": id}
    evento = Evento.get_evento_y_usuario(data)
    if evento is None:
        flash(f"El evento con id {id} no existe")
        return redirect("/eventos")
    return render_template("ver_evento.html", evento=evento)


@app.route("/editar/<int:id>")
def editar_evento(id):
    if "usuario_id" not in session: # Si no hay id de usuario en la session
        flash("Debes iniciar sesión para acceder", "error")
        return redirect("/")
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


# Login

@app.route("/usuarios/registrar", methods=["POST"])
def registrar():
    # Validar datos
    if not Usuario.validar_registro(request.form.to_dict()):
        return redirect("/")
    
    # Hashear contraseña
    pass_hasheado = bcrypt.generate_password_hash(request.form['password'])
    
    # Preparar datos
    datos = {
        "nombre": request.form['nombre'],
        "apellido": request.form['apellido'],
        "email": request.form['email'],
        "password": pass_hasheado
    }
    
    # Guardar usuario
    nuevo_id = Usuario.save(datos)
    
    flash("¡Registro exitoso!", "exito")
    
    return redirect("/")


@app.route("/usuarios/login", methods=["POST"])
def login():
    email_form = request.form["email"]
    usuario = Usuario.buscar_por_email(email_form)

    if not usuario: # Si no existe el usuario / Si el usuario no existe
        flash("E-mail no está registrado", "login")
    
    # Si el usuario existe continua acá

    # Verificar contraseña
    password_hash_db = usuario.password # Hash
    password_form = request.form["password"] # Texto plano
    if not bcrypt.check_password_hash(password_hash_db, password_form): # Si el hash y la contraseña del form no hacen match
        flash("Contraseña incorrecta", "login")
        return redirect("/")
    
    # Si el hash y la contraseña del form hacen match continua acá
    # Crear sesión
    session["usuario_id"] = usuario.id
    flash("Bienvenido!", "exito")
    return redirect("/eventos")


@app.route("/usuarios/logout", methods= ["POST"])
def logout():
    session.clear()
    flash("Session cerrada!", "exito")
    return redirect("/")
