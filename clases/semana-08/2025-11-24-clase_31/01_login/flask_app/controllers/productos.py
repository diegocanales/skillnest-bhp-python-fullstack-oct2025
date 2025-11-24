from flask import render_template, request, redirect
from flask_app.models.producto import Producto
from flask_app import app

@app.route("/productos")
def mostrar_productos():
    productos = Producto.get_all()
    return render_template("productos/dashboard_tabla.html", productos=productos)


@app.route("/productos/<int:id>")
def mostrar_producto(id):
    producto = Producto.get_one(id)
    if not producto:
        return redirect("/productos")
    return render_template("productos/ver_producto.html", producto=producto)


@app.route("/productos/nuevo")
def nuevo_producto():
    return render_template("productos/nuevo_producto.html")


@app.route("/productos/crear", methods=["POST"])
def crear_producto():
    nombre = request.form["nombre"]
    categoria = int(request.form["categoria"])
    precio = int(request.form["precio"])
    descripcion = request.form["descripcion"]

    data = {
        "nombre": nombre,
        "categoria": categoria,
        "descripcion": descripcion,
        "precio": precio
    }
    id_nuevo_producto = Producto.save(datos=data)
    
    return redirect("/productos")

@app.route("/productos/editar/<int:id>")
def editar_producto(id):
    producto = Producto.get_one(id)
    if not producto:
        return redirect("/productos")
    return render_template("productos/editar_producto.html", producto=producto)


@app.route("/productos/actualizar", methods=["POST"])
def actualizar_producto():
    id = int(request.form["id"])
    nombre = request.form["nombre"]
    categoria_id = int(request.form["categoria_id"])
    descripcion = request.form["descripcion"]
    precio = float(request.form["precio"])

    data = {
        "id": id,
        "nombre": nombre,
        "categoria_id": categoria_id,
        "descripcion": descripcion,
        "precio": precio
    }
    Producto.update(data)
    
    return redirect("/productos")


@app.route("/productos/eliminar/<int:id>", methods=["POST"])
def eliminar_producto(id):
    producto = Producto.get_one(id)
    if producto:
        Producto.delete(id)
    return redirect("/productos")