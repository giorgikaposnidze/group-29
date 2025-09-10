import random

random_number = random.randint(1, 10)
while True:
    user_guess = int(input("guess number from 1 to 10: "))
    
    if user_guess == random_number:
        print("well done!you have guessed the number!")
    else:
        print("incorrect.try again")