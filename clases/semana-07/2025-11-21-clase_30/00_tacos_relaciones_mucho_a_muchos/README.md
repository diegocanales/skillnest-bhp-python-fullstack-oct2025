
# Proyecto Tacos modularización

Este repositorio tiene la estructura básica para proyectos Flask.

## Estructura del proyecto

```
.
└── flask_app/
    ├── bd/
    │   ├── esquema_tacos_erd.mwb
    │   └── esquema_tacos.sql
    ├── config/
    │   ├── __init__.py
    │   └── mysqlconnection.py
    ├── controllers/
    │   ├── __init__.py
    │   └── tacos.py
    ├── models/
    │   ├── __init__.py
    │   └── taco.py
    ├── templates/
    │   └── *.html
    ├── __init__.py  
    ├── README.md
    ├── requirements.txt
    └── server.py
```

## Ejecutar proyecto

1. Crear el entorno

    ```
    python -m venv .venv
    ```

2. Activar el entorno

    ```
    .\.venv\Scripts\activate
    ```

3. Instalar las dependencias

    Instalar dependencias con pip
    ```
    pip install flask pymysql
    ```
    Instalar dependencias con el archivo requirements
    ```
    pip install -r requirements.txt
    ```