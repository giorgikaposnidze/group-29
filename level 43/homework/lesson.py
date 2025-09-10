#1)
def first_and_last(lst):
    if not lst:
        return None
    return [lst[0], lst[-1]]

my_list = [10, 20, 30, 40, 50]
result = first_and_last(my_list)
print(result)

#2)
def max_of_three(a, b, c):
    return max(a, b, c)

result = max_of_three(10, 25, 15)
print(result)  # 25

#3)
def reverse_string(s):
    return s[::-1]

result = reverse_string("hello")
print(result)

#bonus)
def reverse_string(s):
    reversed_str = ""
    for char in s:
        reversed_str = char + reversed_str
    return reversed_str

result = reverse_string("hello")
print(result)
