#1)
def hello_world():
    print("Hello, World!")

hello_world()

#2)
def sum_two_numbers(num1, num2):
    print(num1 + num2)

sum_two_numbers(5, 7)

#3)
def sum_two_numbers(num1, num2):
    print(num1 + num2)

sum_two_numbers(5, 7)

#4)
def multiply_by_ten(number):
    return number * 10

result = multiply_by_ten(5)
print(result)

#5)
def greet(name="Guest"):
    print(f"Hello, {name}!")

greet("Alice")
greet()

#6)
def outer_function():
    def inner_function():
        print("This is the inner function!")

    print("This is the outer function.")
    inner_function()

outer_function()

#7)
def check_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(f"{num} is Even")
        else:
            print(f"{num} is Odd")

check_even_odd([1, 2, 3, 4, 5])

#8)
def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

max_value = find_max([3, 5, 7, 2, 9, 4])
print(max_value)

#9)
def filter_positive_numbers(numbers):
    positive_numbers = []
    for num in numbers:
        if num > 0:
            positive_numbers.append(num)
    return positive_numbers

positive_list = filter_positive_numbers([-3, 4, -1, 2, -5])
print(positive_list)

#10)
def sum_divisible_by_three(start, end):
    total_sum = 0
    for num in range(start, end + 1):
        if num % 3 == 0:
            total_sum += num
    return total_sum

sum_result = sum_divisible_by_three(1, 100)
print(sum_result)
