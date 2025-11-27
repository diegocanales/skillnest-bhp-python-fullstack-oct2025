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
