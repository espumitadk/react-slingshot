from game import games
from game.ConnectFour import ConnectFour
from game.Heuristic import heuristic

player = 'X'
problem_pLayer = player
game = ConnectFour()
state = game.initial

for key, value in { (1, 1): 'X', (1, 2): 'X', (1, 3): 'X', (2, 1): 'X' }.iteritems():
    state.board.setdefault(key, value)
    state.moves.remove(key)

if game.terminal_test(state):
    print "Final de la partida"
else:
    print "Thinking..."
    move = games.alphabeta_search(state, game, 4, None, heuristic, problem_pLayer)
    state = game.make_move(move, state)
    print "-------------------"

game.display(state)
