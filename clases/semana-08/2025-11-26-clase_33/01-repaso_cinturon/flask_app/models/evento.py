from flask_app.config.mysqlconnection import connectToMySQL

class Evento:
    def __init__(self, data):
        
        self.id = data["id"]
        self.evento = data["evento"]
        self.ubicacion = data["ubicacion"]
        self.fecha = data["fecha"]
        self.detalles = data["detalles"]
        self.usuario_id = data["usuario_id"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        # TODO: implementar relación con usuario
        # self.usuario_id

        # self.usuario -> Usuario
        # self.usuario -> dict

        # self.usuario_nombre -> string
        # self.usuario_apellido -> string
 

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM eventos;"
        resultados = connectToMySQL("esquema_eventos").query_db(query)
        objetos = []
        for data in resultados:
            objeto = cls(data)
            objetos.append(objeto)
        return objetos


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

    @classmethod
    def get_evento_y_usuario(cls, data):
        pass


