from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.evento import Evento
from pprint import pprint

data = {
    "id": 1
}

query = """
        SELECT * FROM eventos
        LEFT JOIN usuarios ON eventos.usuario_id = usuarios.id
        WHERE eventos.id = %(id)s;
        """
resultados = connectToMySQL('esquema_eventos').query_db(query, data)
evento = Evento(resultados[0])

print(evento.id)
print(evento.evento)
print(evento.fecha)
print(evento.detalles)

# dar los valores a evento.usuario_nombre evento.usuario_apellido

print("------")
print(resultados)

evento.usuario_nombre = resultados[0]["nombre"]
evento.usuario_apellido = resultados[0]["apellido"]

print(evento.usuario_nombre)
print(evento.usuario_apellido)


print("Prueba con metodo de clase")

evento = Evento.get_evento_y_usuario(data)

print(evento.id)
print(evento.evento)
print(evento.fecha)
print(evento.detalles)
print(evento.usuario_nombre)
print(evento.usuario_apellido)

print("------ Lista de eventos con el campo nombre y apellido llenados ------")

query = """
SELECT * FROM eventos
LEFT JOIN usuarios ON eventos.usuario_id = usuarios.id;
"""
resultados = connectToMySQL('esquema_eventos').query_db(query)
print(type(resultados))
print(len(resultados))

print(resultados[0])

eventos = []

for fila_en_db in resultados:
    print("fila_en_db")
    print(fila_en_db)
    data_evento = {
        "id": fila_en_db["id"],
        "evento": fila_en_db["evento"],
        "ubicacion": fila_en_db["ubicacion"],
        "fecha": fila_en_db["fecha"],
        "detalles": fila_en_db["detalles"],
        "usuario_id": fila_en_db["usuario_id"],
        "created_at": fila_en_db["created_at"],
        "updated_at": fila_en_db["updated_at"],
    }
    evento = Evento(data=data_evento)
    evento.usuario_nombre = fila_en_db["nombre"]
    evento.usuario_apellido = fila_en_db["apellido"]

    eventos.append(evento)

print("Fin iteracion")
print(eventos)
print(eventos[0].evento)
print(eventos[0].usuario_nombre)



# lista_eventos = Evento.get_all_eventos_y_usuarios()