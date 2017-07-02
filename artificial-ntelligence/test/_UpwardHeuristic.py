from game.ConnectFour import ConnectFour
from game.heuristics.UpwardHeuristic import UpwardHeuristic
import unittest


class _UpwardHeuristic(unittest.TestCase):

    @classmethod
    def setUp(cls):
        cls.state = ConnectFour().initial
        cls.problemPlayer = 'X'
        cls.otherPlayer = "O"

    def test_for_empty_board_heuristic_should_be_0(self):
        self.assertEqual(self.upward_heuristic(), 0)

    def test_for_a_connection_of_four_tokens_heuristic_should_be_infinity(self):
        self.add_tokens({
            (4, 1): 'X',
            (5, 1): 'O',
            (5, 2): 'X',
            (6, 1): 'O',
            (6, 2): 'O',
            (6, 3): 'X',
            (7, 1): 'O',
            (7, 2): 'O',
            (7, 3): 'O',
            (7, 4): 'X'
        })
        self.assertEqual(self.upward_heuristic(), float('inf'))

    def test_for_an_enemy_connection_of_four_tokens_heuristic_should_be_minus_infinity(self):
        self.add_tokens({
            (4, 1): 'O',
            (5, 1): 'X',
            (5, 2): 'O',
            (6, 1): 'X',
            (6, 2): 'X',
            (6, 3): 'O',
            (7, 1): 'X',
            (7, 2): 'X',
            (7, 3): 'X',
            (7, 4): 'O'
        })
        self.assertEqual(self.upward_heuristic(), -float('inf'))

    def test_for_a_connection_of_three_tokens_heuristic_should_be_450(self):
        self.add_tokens({
            (4, 1): 'X',
            (5, 1): 'O',
            (5, 2): 'X',
            (6, 1): 'O',
            (6, 2): 'X',
            (6, 3): 'X'
        })
        self.assertEqual(self.upward_heuristic(), 450)

    def test_for_a_connection_of_three_tokens_with_a_block_in_the_right_heuristic_should_be_0(self):
        self.add_tokens({
            (5, 1): 'X',
            (6, 1): 'O',
            (6, 2): 'X',
            (7, 1): 'O',
            (7, 2): 'X',
            (7, 3): 'X'
        })
        self.assertEqual(self.upward_heuristic(), 0)

    def test_for_a_connection_of_three_tokens_with_a_enemy_block_in_the_right_heuristic_should_be_0(self):
        self.add_tokens({
            (4, 1): 'X',
            (5, 1): 'O',
            (5, 2): 'X',
            (6, 1): 'O',
            (6, 2): 'X',
            (6, 3): 'X',
            (7, 1): 'O',
            (7, 2): 'X',
            (7, 3): 'O',
            (7, 4): 'O'
        })
        self.assertEqual(self.upward_heuristic(), 0)

    def test_for_a_connection_of_three_tokens_with_a_enemy_block_heuristic_should_be_minus_0(self):
        self.add_tokens({
            (3, 1): 'O',
            (4, 1): 'X',
            (4, 2): 'X',
            (5, 1): 'O',
            (5, 2): 'O',
            (5, 3): 'X',
            (6, 1): 'O',
            (6, 2): 'O',
            (6, 3): 'O',
            (6, 4): 'X',
            (7, 1): 'O',
            (7, 2): 'X',
            (7, 3): 'O',
            (7, 4): 'X',
            (7, 5): 'O',
        })
        self.assertEqual(self.upward_heuristic(), 0)

    def test_two_single_different_tokens_heuristic_should_be_0(self):
        self.add_tokens({
            (6, 1): 'X',
            (7, 1): 'O',
            (7, 2): 'O',
        })
        self.assertEqual(self.upward_heuristic(), 0)

    def upward_heuristic(self):
        return UpwardHeuristic(self.state, self.problemPlayer, self.otherPlayer).heuristic()

    def add_tokens(self, tokens):
        for key in tokens:
            self.state.board.setdefault(key, tokens[key])
            self.state.moves.remove(key)
