from game.heuristics.HorizontalHeuristic import HorizontalHeuristic
from game.heuristics.VerticalHeuristic import VerticalHeuristic
from game.heuristics.UpwardHeuristic import UpwardHeuristic
from game.heuristics.DownwardHeuristic import DownwardHeuristic
from redis import Redis

def memoization(function_call):
    redis = Redis(host='artificial-intelligence-cache', port='6379')

    def helper(state, problem_player):
        value = redis.get(str(state.board))
        if value is None:
            value = function_call(state, problem_player)
            redis.set(str(state.board), value)
        return float(value)

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
