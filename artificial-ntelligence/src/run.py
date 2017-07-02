from game import games
from game.ConnectFour import ConnectFour
from game.Heuristic import heuristic

diff = {
    1: 2,
    2: 3,
    3: 4
}
dif = raw_input("Dificultad (1-3): ")
dif_num = int(str(dif).strip())

difficult_graph_length = diff[dif_num]

print difficult_graph_length
player = 'X'
problem_pLayer = player

game = ConnectFour()
state = game.initial

while True:
    print "Jugador a mover:", game.to_move(state)
    game.display(state)

    if player == 'O':
        col_str = raw_input("Movimiento: ")
        coor = int(str(col_str).strip())
        x = coor
        y = -1
        legal_moves = game.legal_moves(state)
        for lm in legal_moves:
            if lm[0] == x:
                y = lm[1]
        state = game.make_move((x, y), state)
        player = 'X'
    else:
        print "Thinking..."
        move = games.alphabeta_search(state, game, difficult_graph_length, None, heuristic, problem_pLayer)
        state = game.make_move(move, state)
        player = 'O'
    print "-------------------"
    if game.terminal_test(state):
        game.display(state)
        print "Final de la partida"
        break
