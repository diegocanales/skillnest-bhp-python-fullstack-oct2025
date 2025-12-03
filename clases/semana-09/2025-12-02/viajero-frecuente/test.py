from datetime import datetime


fecha_inicio = datetime.strptime("2025-01-01", "%Y-%m-%d")
fecha_fin = datetime.strptime("2025-02-01", "%Y-%m-%d")
fecha_hoy = datetime.now()

print(fecha_inicio)
print(fecha_fin)
print(fecha_hoy)

if fecha_inicio > fecha_hoy:
    print("Fecha Inicio es posterior a la de hoy")
else:
    print("Fecha Inicio es anterior a la de hoy")
    