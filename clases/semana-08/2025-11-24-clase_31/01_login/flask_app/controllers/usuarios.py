from flask import render_template, request, redirect, session
from flask_app.models.usuario import Usuario
from flask_app import app, bcrypt

from flask import render_template, redirect, request, flash, session
from flask_app import app, bcrypt
from flask_app.models.usuario import Usuario


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
        "edad": int(request.form['edad']),
        "email": request.form['email'],
        "password": pass_hasheado,
        "edad": request.form.get('edad')
    }
    
    # Guardar usuario
    nuevo_id = Usuario.save(datos)
    
    # Crear sesión
    session['usuario_id'] = nuevo_id
    flash("¡Registro exitoso!", "exito")
    
    return redirect("/dashboard")

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
    return redirect("/dashboard")


@app.route("/dashboard")
def dashboard():
    if "usuario_id" not in session: # Si no hay id de usuario en la session
        flash("Debes iniciar sesión para acceder", "error")
        return redirect("/")
    
    # Si hay usuario en la session continua acá
    # Obtener usuario actual desde la base de datos
    usuario_id = session["usuario_id"]
    usuario = Usuario.get_one(usuario_id)
    
    if not usuario: # Si el usuario no existe
        session.clear()
        flash("Usuario no encontrado", "error")
        return redirect("/")
    
    return render_template("dashboard.html", usuario=usuario)

@app.route("/usuarios/logout", methods= ["POST"])
def logout():
    session.clear()
    flash("Session cerrada!", "exito")
    return redirect("/")

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
    session["form_data"] = request.form.to_dict()

    data = {
        "nombre": request.form["nombre"],
        "apellido": request.form["apellido"],
        "email": request.form["email"],
        "edad": int(request.form["edad"])
    }

    if not Usuario.validar_usuario(data):
        return redirect("/usuarios/nuevo")

    session.pop('form_data', None)
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