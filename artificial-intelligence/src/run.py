from game import games
from game.ConnectFour import ConnectFour
from game.Heuristic import heuristic
import socket
import json

serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serverSocket.bind(("artificial-intelligence", 5051))
serverSocket.listen(1)
game = ConnectFour()

while True:
    connection, address = serverSocket.accept()
    try:
        print 'Connection address:', address
        state = game.initial
        while 1:
            data = connection.recv(1024)
            if not data: break
            else:
                newState = json.loads(data)
                print "received cells:", len(newState)
                for cell in newState:
                    state.board.setdefault((cell["x"], cell["y"]), cell["player"])
                    state.moves.remove((cell["x"], cell["y"]))
                move = games.alphabeta_search(state, game, 4, None, heuristic, 'X')
                connection.send("{ movement: '" + str(move[0]) + "'}")
        connection.close()
    except Exception as e:
        print e
        connection.close()
        exit(-1)
