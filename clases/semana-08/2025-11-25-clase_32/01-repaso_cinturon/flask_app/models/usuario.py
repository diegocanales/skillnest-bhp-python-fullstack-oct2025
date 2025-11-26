from flask_app.config.mysqlconnection import connectToMySQL

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
    def save(cls, data):
        pass