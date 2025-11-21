from flask import Flask

app = Flask(__name__)
app.secret_key = "Mi super clave secreta"