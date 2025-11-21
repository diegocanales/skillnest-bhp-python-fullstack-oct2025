from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models import taco


class Complemento:
    def __init__(self, data):
        self.id = data["id"]
        self.nombre_complemento = data["nombre_complemento"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

        self.en_tacos = []

    @classmethod
    def save(cls, datos):
        query = "INSERT INTO complementos (nombre_complemento) VALUES(%(nombre_complemento)s);"
        return connectToMySQL('esquema_tacos').query_db(query, datos)
    

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM complementos;"
        complementos_en_bd = connectToMySQL('esquema_tacos').query_db(query)
        complementos = []
        for complemento in complementos_en_bd:
            complementos.append(cls(complemento))
        return complementos

    @classmethod
    def get_one(cls,datos):
        query = "SELECT * FROM complementos WHERE id = %(id)s;"
        complemento_en_db = connectToMySQL('esquema_tacos').query_db(query,datos)

        return cls(complemento_en_db[0])
    
    @classmethod
    def get_complento_y_tacos(cls, datos):
        query = """
            SELECT * FROM complementos 
            LEFT JOIN complementos_en_tacos ON complementos_en_tacos.complemento_id = complementos.id 
            LEFT JOIN tacos ON complementos_en_tacos.taco_id = tacos.id 
            WHERE complementos.id = %(id)s;
        """

        resultados = connectToMySQL("esquema_tacos").query_db(query, datos)
        
        if not resultados or not resultados[0]['id']:
            return None
        
        complemento = cls(resultados[0])

        for fila_en_db in resultados:
            if fila_en_db["tacos.id"]:
                datos_taco = {
                    "id": fila_en_db["tacos.id"],
                    "tortilla": fila_en_db["tortilla"],
                    "guiso": fila_en_db["guiso"],
                    "salsa": fila_en_db["salsa"],
                    "restaurante_id": fila_en_db["restaurante_id"],
                    "created_at": fila_en_db["tacos.created_at"],
                    "updated_at": fila_en_db["tacos.updated_at"],
                }
                complemento.en_tacos.append(taco.Taco(datos_taco))
        
        return complemento
    