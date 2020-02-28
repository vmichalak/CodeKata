import unittest
from luhn import valid, generate

class LuhnTest(unittest.TestCase):
    def test_single_digit_strings_can_not_be_valid(self):
        self.assertEqual(valid('1'), False)

    # def test_a_single_zero_is_valid(self):
    #     self.assertEqual(valid('0'), False)

    # def test_a_simple_valid_SIN_that_remains_valid_if_reversed(self):
    #     self.assertEqual(valid('059'), True)

    # def test_a_simple_valid_SIN_that_becomes_valid_if_reversed(self):
    #     self.assertEqual(valid('59'), True)

    # def test_single_zero_with_space_is_valid(self):
    #     self.assertEqual(valid(' 0'), False)

    # def test_more_than_a_single_zero_is_valid(self):
    #     self.assertEqual(valid('0000 0'), True)

    # def test_a_valid_Canadian_SIN(self):
    #     self.assertEqual(valid('055 444 285'), True)
    #     self.assertEqual(valid('788 632 818'), True)
    #     self.assertEqual(valid('249 387 382'), True)

    # def test_valid_Canadian_SIN(self):
    #     self.assertEqual(valid('055 444 286'), False)
    #     self.assertEqual(valid('788 632 819'), False)
    #     self.assertEqual(valid('249 387 383'), False)

    # def test_valid_credit_card(self):
    #     self.assertEqual(valid('4456 2922 8603 7803'), True)
    #     self.assertEqual(valid('4289 0031 4275 2235'), True)
    #     self.assertEqual(valid('4766 6566 8643 4163'), True)

    # def test_valid_credit_card(self):
    #     self.assertEqual(valid('4456 2922 8603 7804'), False)
    #     self.assertEqual(valid('4289 0031 4275 2236'), False)
    #     self.assertEqual(valid('4766 6566 8643 4164'), False)

    # def test_valid_number_with_an_even_number_of_digits(self):
    #     self.assertEqual(valid('095 245 88'), True)

    # def test_valid_number_with_an_odd_number_of_spaces(self):
    #     self.assertEqual(valid('234 567 891 234'), True)

    # def test_valid_strings_with_a_nondigit_added_at_the_end_invalid(self):
    #     self.assertEqual(valid('059a'), False)

    # def test_valid_strings_with_punctuation_included_become_invalid(self):
    #     self.assertEqual(valid('055-444-285'), False)

    # def test_input_digit_9_is_correctly_converted_to_output_digit_9(self):
    #     self.assertEqual(valid('091'), True)

    # def test_using_ascii_value_for_nondoubled_nondigit_isnt_allowed(self):
    #     self.assertEqual(valid('055b 444 285'), False)

    # def test_using_ascii_value_for_doubled_nondigit_isnt_allowed(self):
    #     self.assertEqual(valid(':9'), False)

    # def test_generate_a_valid_luhn_number(self):
    #     self.assertEqual(valid(generate(16)), True)
    #     self.assertEqual(valid(generate(16)), True)
    #     self.assertEqual(valid(generate(16)), True)
    #     self.assertEqual(valid(generate(16)), True)
    #     self.assertEqual(valid(generate(16)), True)

if __name__ == '__main__':
    unittest.main()
