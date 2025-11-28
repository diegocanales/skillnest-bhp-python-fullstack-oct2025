from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Usuario:
    def __init__(self, data):
        self.id = data["id"]
        self.nombre = data["nombre"]
        self.apellido = data["apellido"]
        self.email = data["email"]
        self.password = data["password"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        self.eventos = []


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
        nuevo_id = connectToMySQL('esquema_eventos').query_db(query, datos)
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
        resultado = connectToMySQL("esquema_eventos").query_db(query, datos)

        if len(resultado) > 0:
            return cls(resultado[0])
        return None