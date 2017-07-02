class DownwardHeuristic:

    def __init__(self, state, problem_player, other_player):
        self.state = state
        self.problem_player = problem_player
        self.other_player = other_player
        self.values = [50, 500, 900]

    def heuristic(self):
        total_value = 0
        for column in range(1, 8):
            value = 0
            for line in range(1, 7):
                if self.is_empty((column, line)):
                    break
                if self.player((column, line)) == self.problem_player:
                    if not self.player((column, line), -1, +1) == self.problem_player:
                        occurrences = self.occurrences_off(self.problem_player, column, line)
                        if occurrences >= 4:
                            return float('inf')
                        value += self.connection_breaks(column, line, occurrences)
                else:
                    if not self.player((column, line), -1, +1) == self.other_player:
                        occurrences = self.occurrences_off(self.other_player, column, line)
                        if occurrences >= 4:
                            return -float('inf')
                        value -= self.connection_breaks(column, line, occurrences)
            total_value += value
        return total_value

    def connection_breaks(self, column, line, occurrences):
        if self.is_empty((column, line), -1, +1):
            if self.is_empty((column, line), occurrences, -occurrences):
                return self.values[occurrences - 1]
            else:
                return self.values[occurrences - 1]/2
        else:
            if self.is_empty((column, line), occurrences, -occurrences):
                return self.values[occurrences - 1]/2
        return 0

    def occurrences_off(self, player, column, line):
        occurrences = 1
        while self.player((column, line), occurrences, -occurrences) == player:
            occurrences += 1
        return occurrences

    def player(self, key, offset_x=0, offset_y=0):
        return self.state.board.get((key[0] + offset_x, key[1] + offset_y))

    def is_empty(self, key, offset_x=0, offset_y=0):
        return (key[0] + offset_x, key[1] + offset_y) in self.state.moves
