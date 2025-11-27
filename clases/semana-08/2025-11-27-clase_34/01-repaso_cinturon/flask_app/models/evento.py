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

        self.usuario_nombre = data.get("usuario_nombre", "")
        self.usuario_apellido = data.get("usuario_apellido", "")
 

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
    def get_evento_y_usuario(cls, data): # Un evento y con el campo de usuario_nombre y usuario_apellido llenados
        query = """
        SELECT * FROM eventos
        LEFT JOIN usuarios ON eventos.usuario_id = usuarios.id
        WHERE eventos.id = %(id)s;
        """
        resultados = connectToMySQL('esquema_eventos').query_db(query, data)
        evento = cls(resultados[0])

        evento.usuario_nombre = resultados[0]["nombre"]
        evento.usuario_apellido = resultados[0]["apellido"]

        return evento
    
    @classmethod
    def get_all_eventos_y_usuarios(cls):
        query = """
        SELECT * FROM eventos
        LEFT JOIN usuarios ON eventos.usuario_id = usuarios.id;
        """
        resultados = connectToMySQL('esquema_eventos').query_db(query)
        eventos = []
        for fila_en_db in resultados:
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
            evento = cls(data=data_evento)
            evento.usuario_nombre = fila_en_db["nombre"]
            evento.usuario_apellido = fila_en_db["apellido"]

            eventos.append(evento)
        return eventos
