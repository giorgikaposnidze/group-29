#1)
def print_arr(lst):
    for item in lst:
        print(item)

print_arr([1, 2, 3, 4, 5])

#2)
def check(s):
    return 4 < len(s) < 8

#3)
def no_spaces(s):
    return s.replace(" ", "-")

#4)
def Is_best_academy():
    print("Goal-Oriented-Academy")

#5)
def complex_calc(a, b):
    return a + b if a % 2 == 0 else a * b
