from flask_app.models.complemento import Complemento


# Save
# datos = {
#     "nombre_complemento": "ketchup"
# }
# Complemento.save(datos)

# Obtener todos
complementos = Complemento.get_all()
for complemento in complementos:
    print(f"Complemento {complemento.id} | {complemento.nombre_complemento} | {complemento.created_at} | {complemento.updated_at}")


# Obtener complemento y sus tacos asociados

print("Obtener complemento y sus tacos asociados")

datos = {
    "id": 2
}
complemento = Complemento.get_complento_y_tacos(datos)

print(complemento.id)
print(complemento.nombre_complemento)
print(complemento.created_at)
print(complemento.updated_at)

for taco in complemento.en_tacos:
    print(f"Taco ID {taco.id} | {taco.tortilla} | {taco.guiso} | {taco.salsa} | {taco.restaurante_id} | {taco.restaurante_id} | {taco.created_at} | {taco.updated_at}")
