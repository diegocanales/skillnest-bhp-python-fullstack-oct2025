from flask_app.config.mysqlconnection import connectToMySQL
import re
from flask import flash

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Usuario:
    def __init__(self, data):
        self.id = data["id"]
        self.nombre = data["nombre"]
        self.apellido = data["apellido"]
        self.email = data["email"]
        self.edad = data["edad"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]
    
    def __str__(self):
        return f"id: {self.id} | nombre: {self.nombre} | apellido: {self.apellido} | email: {self.email}"
    
    def __repr__(self):
        return f"Usuario(id: {self.id} | nombre: {self.nombre} | apellido: {self.apellido} | email: {self.email})"
    
    
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM usuarios;"
        resultados = connectToMySQL("tienda").query_db(query)

        objetos = []
        for data in resultados:
            objeto = cls(data)
            objetos.append(objeto)
        return objetos
    
    @classmethod
    def get_one(cls, id: int):
        data = {"id": id}
        query = "SELECT * FROM usuarios WHERE id = %(id)s"
        resultado = connectToMySQL("tienda").query_db(query, data)
        if resultado:
            return cls(resultado[0])
        return False
    
    @classmethod
    def save(cls, datos):
        query = """
            INSERT INTO usuarios
            (nombre, apellido, email, edad)
            VALUES (%(nombre)s, %(apellido)s, %(email)s, %(edad)s)
        """
        nuevo_id = connectToMySQL('tienda').query_db(query, datos)
        return nuevo_id
    
    @classmethod
    def update(cls, datos):
        query = """
            UPDATE usuarios
            SET nombre = %(nombre)s,
                apellido = %(apellido)s,
                email = %(email)s,
                edad = %(edad)s
            WHERE id = %(id)s;
        """
        return connectToMySQL('tienda').query_db(query, datos)
    
    @classmethod
    def delete(cls, id):
        query = "DELETE FROM usuarios WHERE id = %(id)s"
        datos = {
            "id": id
        }

        return connectToMySQL("tienda").query_db(query, datos)
    

    @classmethod
    def buscar_por_email(cls, email):
        datos = {
            "email": email
        }
        query = "SELECT * FROM usuarios WHERE email = %(email)s"
        resultado = connectToMySQL("tienda").query_db(query, datos)

        if len(resultado) > 0:
            return cls(resultado[0])
        return None

    @staticmethod
    def validar_usuario(datos: dict) -> bool:
        es_valido = True
        # TODO: implementar validaciones

        if len(datos["email"].strip()) == 0:
            flash("El email es obligatorio", "email")
            es_valido = False
        elif not EMAIL_REGEX.match(datos["email"]):
            flash("Email inválido. Debe tener el formato (ejemplo@dominio.com)", "email")
            es_valido = False
        
        elif Usuario.buscar_por_email(datos["email"]):
            flash("Este usuario ya está registrado", "email")
            es_valido = False
        return es_valido
    
    @staticmethod
    def validar_registro(data):
        es_valido = True

        # TODO: implementar validaciones

        if len(data.get("password", "").strip) < 8:
            flash("La contraseña debe tener al menos 8 caracteres", "password")
            es_valido = False
        
        if data["password"] != data["confirm_password"]:
            flash("Las contraseñas no coinciden", "password")
            es_valido = False
        
        return False

