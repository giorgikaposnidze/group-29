#1)
def sum_of_two_numbers(num1, num2):
    return num1 + num2

result = sum_of_two_numbers(5, 3)
print(result)

#2)
def find_maximum(numbers):
    if len(numbers) == 0:
        return None
    maximum = numbers[0]
    for num in numbers:
        if num > maximum:
            maximum = num
    return maximum

numbers = [2, 5, 8, 1, 7]
result = find_maximum(numbers)
print(result)  # Output will be 8

#3)
def welcome_user(name):
    print(f"Welcome {name}!")

welcome_user("giorgi")



#------------------------#

# def ცნობს, რომ შექმნილია ახალი ფუნქცია.
# keyword არის სპეციალური სიტყვა, რომელსაც აქვს წინასწარ განსაზღვრული მნიშვნელობა
# code block არის კოდის ჯგუფი, რომელიც ერთადაა განთავსებული და შესრულდება ერთიანად.