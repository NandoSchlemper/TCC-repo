from flask import Flask, jsonify
from flask_cors import CORS
import requests, json

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return 'Hello, World!'


@app.route('/pokemon/<name>')
def get_pokemon(name):
    response = requests.get("https://pokeapi.co/api/v2/pokemon/{name}") # If have auth, (..., auth=('user', 'pass'))
    if response.status_code == 200: #Correct response
        return jsonify(response.json())
    else:
        return jsonify({"Error": "Pokemon not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
    