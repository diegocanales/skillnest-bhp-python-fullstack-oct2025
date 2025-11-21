from flask_app.models.restaurante import Restaurante

datos = {
    "id": 2
}

restaurante = Restaurante.get_restaurante_y_tacos(datos)

print(f"Restaurante ID: {restaurante.id}")
print(f"Nombre: {restaurante.nombre}")
for taco in restaurante.tacos:
    print(f"Taco ID {taco.id}")
    print(taco.tortilla)
    print(taco.guiso)
    print(taco.salsa)

