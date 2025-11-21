from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.restaurante import Restaurante
from flask_app.models.taco import Taco

datos = {
    "id": 2
}

query = """
SELECT * FROM restaurantes
LEFT JOIN tacos ON tacos.restaurante_id = restaurantes.id
WHERE restaurantes.id = %(id)s;
"""

resultados = connectToMySQL('esquema_tacos').query_db(query, datos)

for resultado in resultados:
    print(resultado)


print("resultados[0]")
print(resultados[0])





restaurante = Restaurante()
restaurante = Restaurante(resultados[0])

# {'id': 2, 'nombre': 'Tacos Doña Mary', 'created_at': datetime.datetime(2025, 11, 19, 21, 40, 4), 'updated_at': datetime.datetime(2025, 11, 19, 21, 40, 4), 'tacos.id': 3, 'tortilla': 'Maíz', 'guiso': 'Barbacoa', 'salsa': 'Verde', 'tacos.created_at': datetime.datetime(2025, 11, 19, 21, 40, 4), 'tacos.updated_at': datetime.datetime(2025, 11, 19, 21, 40, 4), 'restaurante_id': 2}
# {'id': 2, 'nombre': 'Tacos Doña Mary', 'created_at': datetime.datetime(2025, 11, 19, 21, 40, 4), 'updated_at': datetime.datetime(2025, 11, 19, 21, 40, 4), 'tacos.id': 5, 'tortilla': 'Harina', 'guiso': 'Suadero', 'salsa': 'Roja', 'tacos.created_at': datetime.datetime(2025, 11, 19, 21, 40, 4), 'tacos.updated_at': datetime.datetime(2025, 11, 19, 21, 40, 4), 'restaurante_id': 2}
for fila_en_db in resultados:
    if fila_en_db["tacos.id"]:
        datos_taco = {
            "id": fila_en_db['tacos.id'],
            "tortilla": fila_en_db['tortilla'],
            "guiso": fila_en_db['tortilla'],
            "salsa": fila_en_db['tortilla'],
            "restaurante_id": fila_en_db['restaurante_id'],
            "created_at": fila_en_db['tacos.created_at'],
            "updated_at": fila_en_db['tacos.created_at']
        }

        taco = Taco(datos_taco)