from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.config.contants import ESQUEMA_DB
from flask_app.models import viaje


class Usuario:
    def __init__(self, data):
        self.id = data["id"]
        self.nombre = data["nombre"]
        self.apellido = data["apellido"]
        self.email = data["email"]
        self.password = data.get("password", "")
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        self.viajes = []


    @classmethod
    def get_all(cls):
        pass

    @classmethod
    def get_one(cls, id):
        pass

    @classmethod
    def update(cls, data):
        pass

    @classmethod
    def delete(cls, id):
        pass

    @classmethod
    def save(cls, datos):
        if "password" in datos and datos["password"]:
            query = """
                INSERT INTO usuarios
                (nombre, apellido, email, password)
                VALUES (%(nombre)s, %(apellido)s, %(email)s, %(password)s)
            """
        else:
            query = """
                INSERT INTO usuarios
                (nombre, apellido, email)
                VALUES (%(nombre)s, %(apellido)s, %(email)s)
            """
        nuevo_id = connectToMySQL(ESQUEMA_DB).query_db(query, datos)
        return nuevo_id


    @staticmethod
    def validar_registro(data):
        es_valido = True

        # TODO: implementar validaciones

        if len(data.get("password", "").strip()) < 8:
            flash("La contraseña debe tener al menos 8 caracteres", "password")
            es_valido = False
        
        if data["password"] != data["confirm_password"]:
            flash("Las contraseñas no coinciden", "password")
            es_valido = False
        
        return es_valido


    @classmethod
    def buscar_por_email(cls, email):
        datos = {
            "email": email
        }
        query = "SELECT * FROM usuarios WHERE email = %(email)s"
        resultado = connectToMySQL(ESQUEMA_DB).query_db(query, datos)

        if len(resultado) > 0:
            return cls(resultado[0])
        return None
    

    @classmethod
    def get_usuario_y_viajes(cls, id) -> Usuario:
        pass


    @staticmethod
    def save_usuario_viaje(usuario_id, viaje_id):
        data = {
            "usuario_id": usuario_id,
            "viaje_id": viaje_id,
        }
        query = """
            INSERT INTO viajeros
            (usuario_id, viaje_id)
            VALUES (%(usuario_id)s, %(viaje_id)s)
        """
        nuevo_id = connectToMySQL(ESQUEMA_DB).query_db(query, data)
        return nuevo_id