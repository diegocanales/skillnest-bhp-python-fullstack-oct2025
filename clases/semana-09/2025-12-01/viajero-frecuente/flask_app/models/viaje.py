from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.config.contants import ESQUEMA_DB
from flask_app.models import usuario

class Viaje:
    def __init__(self, data):
        self.id = data["id"]
        self.destino = data["destino"]
        self.fecha_inicio = data["fecha_inicio"]
        self.fecha_fin = data["fecha_fin"]
        self.itinerario = data["itinerario"]

        self.usuario_id = data["usuario_id"]
        
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        self.organizador = None # Usuario
        self.viajeros = [] # Lista de Usuarios


    @classmethod
    def get_all(cls):
        pass

    @classmethod
    def get_one(cls, id):
        data = {"id": id}
        query = "SELECT * FROM viajes WHERE id = %(id)s"
        resultado = connectToMySQL(ESQUEMA_DB).query_db(query, data)
        if resultado:
            return cls(resultado[0])
        return False

    @classmethod
    def update(cls, data):
        pass

    @classmethod
    def delete(cls, id):
        pass


    @classmethod
    def get_viaje_y_usuarios(cls, id) -> Viaje:
        datos = {
            "id": id
        }
        query = """
            SELECT * FROM viajes
            LEFT JOIN viajeros ON viajes.id = viajeros.viaje_id
            LEFT JOIN usuarios ON viajeros.usuario_id = usuarios.id
            WHERE viajes.id = %(id)s;
        """
        resultados = connectToMySQL(ESQUEMA_DB).query_db(query, datos)

        if not resultados or not resultados[0]['id']:
            return None

        viaje = cls(resultados[0])

        print("======================================")
        print(resultados)
        print("======================================")

        for fila_en_db in resultados:
            if fila_en_db["usuarios.id"]:
                datos_usuarios = {
                    "id": fila_en_db["usuarios.id"],
                    "nombre": fila_en_db["nombre"],
                    "apellido": fila_en_db["apellido"],
                    "email": fila_en_db["email"],
                    # Se omite la password
                    "created_at": fila_en_db["usuarios.created_at"],
                    "updated_at": fila_en_db["usuarios.updated_at"]
                }

                usuario_auxiliar = usuario.Usuario(datos_usuarios)
                viaje.viajeros.append(usuario_auxiliar)
        return viaje