from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.config.contants import ESQUEMA_DB


class UsuarioViaje:
    def __init__(self, datos):
        self.usuario_id = datos["usuario_id"]
        self.viaje_id = datos["viaje_id"]
    
    @classmethod
    def save(cls, usuario_id, viaje_id):
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
    
    @classmethod
    def delete(cls, usuario_id, viaje_id):
        data = {
            "usuario_id": usuario_id,
            "viaje_id": viaje_id,
        }
        query = """
        DELETE FROM viajeros 
        WHERE usuario_id = %(usuario_id)s AND viaje_id = %(viaje_id)s
        """
        return connectToMySQL(ESQUEMA_DB).query_db(query, data)