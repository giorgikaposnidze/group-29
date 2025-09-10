#upper
#1)
sentence = input("Enter a sentence: ")

uppercase_sentence = sentence.upper()
print("Uppercase sentence:", uppercase_sentence)

#2)
name = input("Enter your name: ")

uppercase_name = name.upper()
print("Your name in uppercase is:", uppercase_name)

#3)
def convert_to_uppercase(strings_list):
    return [string.upper() for string in strings_list]

lowercase_strings = ["hello", "world", "python"]
uppercase_strings = convert_to_uppercase(lowercase_strings)

print("Uppercase strings:", uppercase_strings)


#lower
#5)
sentence = input("Enter a sentence: ")

lowercase_sentence = sentence.lower()
print("Lowercase sentence:", lowercase_sentence)

#6)
email = input("Enter your email address: ")

lowercase_email = email.lower()
print("Your email in lowercase is:", lowercase_email)

#7)
def to_lowercase(input_string):
    
    return input_string.lower()

mixed_case_string = "Hello WORLD!"
lowercase_string = to_lowercase(mixed_case_string)
print("Lowercase version:", lowercase_string)



#Capitalize
#8)
sentence = input("Enter a sentence: ")

capitalized_sentence = sentence.capitalize()
print("Capitalized sentence:", capitalized_sentence)

#9)
strings_list = ["hello", "world", "python", "is", "awesome"]

capitalized_list = [string.capitalize() for string in strings_list]

print("Capitalized list:", capitalized_list)

#10)
def capitalize_first_letter(input_string):
    
    return input_string.capitalize()

input_string = "hello world"
capitalized_string = capitalize_first_letter(input_string)
print("Capitalized string:", capitalized_string)



#find
#11)
sentence = input("Enter a sentence: ")

position = sentence.find("Python")

if position != -1:
    print(f"The word 'Python' first appears at position: {position}")
else:
    print("The word 'Python' was not found in the sentence.")

#12)
string = input("Enter the string: ")
substring = input("Enter the substring to search for: ")

index = string.find(substring)

if index != -1:
    print(f"The substring '{substring}' starts at index: {index}")
else:
    print(f"The substring '{substring}' was not found in the string.")

#13)
def find_char_index(input_string, char):
    index = input_string.find(char)
    
    if index != -1:
        return index
    else:
        return f"The character '{char}' was not found in the string."

input_string = "hello world"
char_to_find = "o"
index = find_char_index(input_string, char_to_find)
print(f"The character '{char_to_find}' is at index: {index}")



#len
#14)
user_string = input("Enter a string: ")

length = len(user_string)

print(f"The length of the provided string is: {length}")

#15)
def get_lengths(strings_list):
    return [len(string) for string in strings_list]

strings = ["apple", "banana", "cherry", "date"]
lengths = get_lengths(strings)
print("Lengths of the strings:", lengths)



#count
#16)
paragraph = input("Enter a paragraph: ")

lowercase_paragraph = paragraph.lower()

count_the = lowercase_paragraph.split().count("the")

print(f"The word 'the' appears {count_the} times in the paragraph.")

#17)
user_string = input("Enter a string: ")
char_to_count = input("Enter the character to count: ")

count_char = user_string.count(char_to_count)

print(f"The character '{char_to_count}' appears {count_char} times in the string.")

#18)
def count_word_occurrences(text, word):
    text_lower = text.lower()
    
    word_count = text_lower.split().count(word.lower())

    return word_count

text_input = "The quick brown fox jumps over the lazy dog. The dog is lazy."
word_input = "the"
occurrences = count_word_occurrences(text_input, word_input)

print(f"The word '{word_input}' appears {occurrences} times in the text.")
