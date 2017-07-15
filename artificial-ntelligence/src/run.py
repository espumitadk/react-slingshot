from game import games
from game.ConnectFour import ConnectFour
from game.Heuristic import heuristic

# https://pypi.python.org/pypi/python-daemon/#downloads
import daemon

from spam import do_main_program

with daemon.DaemonContext():
    game = ConnectFour()
    state = game.initial
    for key, value in { (1, 1): 'X', (1, 2): 'X', (1, 3): 'X', (2, 1): 'X' }.iteritems():
        state.board.setdefault(key, value)
        state.moves.remove(key)
    print games.alphabeta_search(state, game, 4, None, heuristic, 'X')
