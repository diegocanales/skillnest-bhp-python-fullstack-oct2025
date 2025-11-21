from flask_app.config.mysqlconnection import connectToMySQL
#from flask_app.models.taco import Taco

datos = {
    "id": 1
}



query = """
    SELECT * FROM tacos
    LEFT JOIN complementos_en_tacos ON complementos_en_tacos.taco_id = tacos.id
    LEFT JOIN complementos ON complementos_en_tacos.complemento_id = complementos.id 
    WHERE tacos.id = %(id)s;
"""



resultados = connectToMySQL('esquema_tacos').query_db(query, datos)

for resultado in resultados:
    print("-----")
    print(resultado)
    print("-----")
