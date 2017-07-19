from game import games
from game.ConnectFour import ConnectFour
from game.Heuristic import heuristic
import socket
import json

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serverSocket.bind(("artificial-intelligence", 5051))
serverSocket.listen(1)
while True:
    game = ConnectFour()
    state = game.initial
    try:
        connection, address = serverSocket.accept()
        print 'Connection address:', address
    except Exception as exception:
        print exception
        connection.close()
        serverSocket.close()
        exit(-1)
    try:
        while 1:
            data = connection.recv(1024)
            if not data: break
            else:
                newState = json.loads(data)
                if newState:
                    for cell in newState:
                        state.board.setdefault((cell["x"], cell["y"]), cell["player"])
                        state.moves.remove((cell["x"], cell["y"]))
                move = games.alphabeta_search(state, game, 4, None, heuristic, 'X')
                connection.send(str(move[0]))
                break
        connection.close()

    except Exception as exception:
        print exception
        connection.close()
        serverSocket.close()
        exit(-1)
