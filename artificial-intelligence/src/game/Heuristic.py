from game.heuristics.HorizontalHeuristic import HorizontalHeuristic
from game.heuristics.VerticalHeuristic import VerticalHeuristic
from game.heuristics.UpwardHeuristic import UpwardHeuristic
from game.heuristics.DownwardHeuristic import DownwardHeuristic


def memoization(function_call):
    cached_buffer = {}

    def helper(state, problem_player):
        key = str(state.board)
        if key not in cached_buffer:
            cached_buffer[key] = function_call(state, problem_player)
        return cached_buffer[key]

    return helper


@memoization
def heuristic(state, problem_player):
    heuristic_value = 0
    other_player = "O" if problem_player == "X" else "X"
    heuristic_value += VerticalHeuristic(state, problem_player, other_player).heuristic()
    if heuristic_value == -float('inf') or heuristic_value == float('inf'):
        return heuristic_value
    heuristic_value += HorizontalHeuristic(state, problem_player, other_player).heuristic()
    if heuristic_value == -float('inf') or heuristic_value == float('inf'):
        return heuristic_value
    heuristic_value += UpwardHeuristic(state, problem_player, other_player).heuristic()
    if heuristic_value == -float('inf') or heuristic_value == float('inf'):
        return heuristic_value
    heuristic_value += DownwardHeuristic(state, problem_player, other_player).heuristic()
    if heuristic_value == -float('inf') or heuristic_value == float('inf'):
        return heuristic_value
    return heuristic_value
