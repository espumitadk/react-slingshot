from game.ConnectFour import ConnectFour
from game.heuristics.DownwardHeuristic import DownwardHeuristic
import unittest


class _UpwardHeuristic(unittest.TestCase):

    @classmethod
    def setUp(cls):
        cls.state = ConnectFour().initial
        cls.problemPlayer = 'X'
        cls.otherPlayer = "O"

    def test_for_empty_board_heuristic_should_be_0(self):
        self.assertEqual(self.downward_heuristic(), 0)

    def test_for_a_connection_of_four_tokens_heuristic_should_be_infinity(self):
        self.add_tokens({
            (4, 1): 'X',
            (3, 1): 'O',
            (3, 2): 'X',
            (2, 1): 'O',
            (2, 2): 'O',
            (2, 3): 'X',
            (1, 1): 'O',
            (1, 2): 'O',
            (1, 3): 'O',
            (1, 4): 'X'
        })
        self.assertEqual(self.downward_heuristic(), float('inf'))

    def test_for_an_enemy_connection_of_four_tokens_heuristic_should_be_minus_infinity(self):
        self.add_tokens({
            (4, 1): 'O',
            (3, 1): 'X',
            (3, 2): 'O',
            (2, 1): 'X',
            (2, 2): 'X',
            (2, 3): 'O',
            (1, 1): 'X',
            (1, 2): 'X',
            (1, 3): 'X',
            (1, 4): 'O'
        })
        self.assertEqual(self.downward_heuristic(), -float('inf'))

    def test_for_a_connection_of_three_tokens_heuristic_should_be_450(self):
        self.add_tokens({
            (4, 1): 'X',
            (3, 1): 'O',
            (3, 2): 'X',
            (2, 1): 'O',
            (2, 2): 'X',
            (2, 3): 'X'
        })
        self.assertEqual(self.downward_heuristic(), 450)

    def test_for_a_connection_of_three_tokens_with_a_block_in_the_right_heuristic_should_be_0(self):
        self.add_tokens({
            (3, 1): 'X',
            (2, 1): 'O',
            (2, 2): 'X',
            (1, 1): 'O',
            (1, 2): 'X',
            (1, 3): 'X'
        })
        self.assertEqual(self.downward_heuristic(), 0)

    def test_for_a_connection_of_three_tokens_with_a_enemy_block_in_the_right_heuristic_should_be_0(self):
        self.add_tokens({
            (4, 1): 'X',
            (3, 1): 'O',
            (3, 2): 'X',
            (2, 1): 'O',
            (2, 2): 'X',
            (2, 3): 'X',
            (1, 1): 'O',
            (1, 2): 'X',
            (1, 3): 'O',
            (1, 4): 'O'
        })
        self.assertEqual(self.downward_heuristic(), 0)

    def test_for_a_connection_of_three_tokens_with_a_enemy_block_heuristic_should_be_minus_0(self):
        self.add_tokens({
            (5, 1): 'O',
            (4, 1): 'X',
            (4, 2): 'X',
            (3, 1): 'O',
            (3, 2): 'O',
            (3, 3): 'X',
            (2, 1): 'O',
            (2, 2): 'O',
            (2, 3): 'O',
            (2, 4): 'X',
            (1, 1): 'O',
            (1, 2): 'X',
            (1, 3): 'O',
            (1, 4): 'X',
            (1, 5): 'O',
        })
        self.assertEqual(self.downward_heuristic(), 0)

    def test_two_single_different_tokens_heuristic_should_be_0(self):
        self.add_tokens({
            (2, 1): 'X',
            (1, 1): 'O',
            (1, 2): 'O',
        })
        self.assertEqual(self.downward_heuristic(), 0)

    def downward_heuristic(self):
        return DownwardHeuristic(self.state, self.problemPlayer, self.otherPlayer).heuristic()

    def add_tokens(self, tokens):
        for key in tokens:
            self.state.board.setdefault(key, tokens[key])
            self.state.moves.remove(key)
