#islower
#1)
input_string = "hello world"

is_lowercase = input_string.islower()

print(is_lowercase)

#2)
def is_all_lowercase(s):
    return s.islower()

result = is_all_lowercase("hello world")
print(result)

#3)
user_input = input("Please enter a string: ")

if user_input.islower():
    print("The string contains only lowercase letters.")
else:
    print("The string does not contain only lowercase letters.")


#isupper
#4)
input_string = "HELLO WORLD"

is_uppercase = input_string.isupper()

print(is_uppercase)

#5)
def is_all_uppercase(s):
    return s.isupper()

result = is_all_uppercase("HELLO WORLD")
print(result)

#6)
user_input = input("Please enter a string: ")

if user_input.isupper():
    print("The string is in uppercase.")
else:
    print("The string is not in uppercase.")


#swapsase
#7)
input_string = "Hello World"

swapped_case_string = input_string.swapcase()

print(swapped_case_string)

#8)
def swap_case_sentence(sentence):
    return sentence.swapcase()

sentence = "Hello, How Are You?"
swapped_sentence = swap_case_sentence(sentence)
print(swapped_sentence)

#-------------------------------------------------

#9)
def welcome_user(name, age):
    return f"Welcome, {name}! You are {age} years old."

name = input("Enter your name: ")
age = input("Enter your age: ")

message = welcome_user(name, age)
print(message)


#10)
def sentence_to_words(sentence):
    words = sentence.split()
    return words

sentence = input("Enter a sentence: ")

words_list = sentence_to_words(sentence)
print(words_list)