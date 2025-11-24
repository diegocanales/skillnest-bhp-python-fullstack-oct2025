from flask_app.models.usuario import Usuario

datos = {
    "id": 7,
    "nombre": "Diego",
    "apellido": "C",
    "email": "email@email.com",
    "edad": 200
}

print(Usuario.update(datos))