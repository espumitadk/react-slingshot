from game.ConnectFour import ConnectFour
from game.heuristics.HorizontalHeuristic import HorizontalHeuristic
import unittest


class _HorizontalHeuristic(unittest.TestCase):

    @classmethod
    def setUp(cls):
        cls.state = ConnectFour().initial
        cls.problemPlayer = 'X'
        cls.otherPlayer = "O"

    def test_for_empty_board_heuristic_should_be_0(self):
        self.assertEqual(self.horizontal_heuristic(), 0)

    def test_for_a_connection_of_four_tokens_heuristic_should_be_infinity(self):
        self.add_tokens({
            (1, 1): 'X',
            (2, 1): 'X',
            (3, 1): 'X',
            (4, 1): 'X'
        })
        self.assertEqual(self.horizontal_heuristic(), float('inf'))

    def test_for_an_enemy_connection_of_four_tokens_heuristic_should_be_minus_infinity(self):
        self.add_tokens({
            (1, 1): 'O',
            (2, 1): 'O',
            (3, 1): 'O',
            (4, 1): 'O'
        })
        self.assertEqual(self.horizontal_heuristic(), -float('inf'))

    def test_for_a_connection_of_three_tokens_heuristic_should_be_800(self):
        self.add_tokens({
            (3, 1): 'X',
            (4, 1): 'X',
            (5, 1): 'X'
        })
        self.assertEqual(self.horizontal_heuristic(), 800)

    def test_for_a_connection_of_three_tokens_with_a_block_in_the_right_heuristic_should_be_400(self):
        self.add_tokens({
            (5, 1): 'X',
            (6, 1): 'X',
            (7, 1): 'X'
        })
        self.assertEqual(self.horizontal_heuristic(), 400)

    def test_for_a_connection_of_three_tokens_with_a_block_in_the_left_heuristic_should_be_400(self):
        self.add_tokens({
            (1, 1): 'X',
            (2, 1): 'X',
            (3, 1): 'X'
        })
        self.assertEqual(self.horizontal_heuristic(), 400)

    def test_for_a_connection_of_three_tokens_with_a_enemy_block_in_the_right_heuristic_should_be_380(self):
        self.add_tokens({
            (3, 1): 'X',
            (4, 1): 'X',
            (5, 1): 'X',
            (6, 1): 'O'
        })
        self.assertEqual(self.horizontal_heuristic(), 380)

    def test_for_a_connection_of_three_tokens_with_a_enemy_block_in_the_left_heuristic_should_be_380(self):
        self.add_tokens({
            (3, 1): 'O',
            (4, 1): 'X',
            (5, 1): 'X',
            (6, 1): 'X'
        })
        self.assertEqual(self.horizontal_heuristic(), 380)

    def test_for_a_connection_of_three_tokens_with_a_enemy_block_heuristic_should_be_minus_40(self):
        self.add_tokens({
            (2, 1): 'O',
            (3, 1): 'X',
            (4, 1): 'X',
            (5, 1): 'X',
            (6, 1): 'O'
        })
        self.assertEqual(self.horizontal_heuristic(), -40)

    def test_full_row_with_no_four_connection_should_be_0(self):
        self.add_tokens({
            (1, 1): 'X',
            (2, 1): 'X',
            (3, 1): 'X',
            (4, 1): 'O',
            (5, 1): 'O',
            (6, 1): 'O',
            (7, 1): 'X'
        })
        self.assertEqual(self.horizontal_heuristic(), 0)

    def test_two_single_different_tokens_heuristic_should_be_0(self):
        self.add_tokens({
            (3, 1): 'X',
            (4, 1): 'O'
        })
        self.assertEqual(self.horizontal_heuristic(), 0)

    def test_two_pairs_off_different_tokens_heuristic_should_be_0(self):
        self.add_tokens({
            (3, 1): 'X',
            (4, 1): 'X',
            (5, 1): 'O',
            (6, 1): 'O'
        })
        self.assertEqual(self.horizontal_heuristic(), 0)

    def horizontal_heuristic(self):
        return HorizontalHeuristic(self.state, self.problemPlayer, self.otherPlayer).heuristic()

    def add_tokens(self, tokens):
        for key in tokens:
            self.state.board.setdefault(key, tokens[key])
            self.state.moves.remove(key)
