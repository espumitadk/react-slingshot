from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
import socket

app = Flask(__name__)
CORS(app)

@app.route('/state', methods=['POST'])
def state():
    newState = request.json
    stateFormated = []
    for cell in newState:
        stateFormated.append({'x': int(cell["column"]), 'y': int(cell["row"]), 'player': str("X" if cell["player"] == "PLAYER_2" else "O")})
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        server.connect(("artificial-intelligence", 5051))
        server.send(json.dumps(stateFormated).encode())
        serverMovement = server.recv(1024)
        server.close()
        return jsonify({'column': int(serverMovement)})
    except Exception as e:
        print e
        server.close()
        exit(-1)
app.run(debug=True, host="0.0.0.0", port=8181)
