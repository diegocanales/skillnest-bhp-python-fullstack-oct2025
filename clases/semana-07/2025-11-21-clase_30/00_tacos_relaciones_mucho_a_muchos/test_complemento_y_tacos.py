from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.complemento import Complemento
#from flask_app.models.taco import Taco

datos = {
    "id": 2
}

query = """
    SELECT * FROM complementos 
    LEFT JOIN complementos_en_tacos ON complementos_en_tacos.complemento_id = complementos.id 
    LEFT JOIN tacos ON complementos_en_tacos.taco_id = tacos.id 
    WHERE complementos.id = %(id)s;
"""

resultados = connectToMySQL('esquema_tacos').query_db(query, datos)

for resultado in resultados:
    print("-----")
    print(resultado)
    print("-----")


print("resultados[0]")
print(resultados[0])

complemento = Complemento(resultados[0])
print(complemento.id)
print(complemento.nombre_complemento)
print(complemento.created_at)
print(complemento.updated_at)