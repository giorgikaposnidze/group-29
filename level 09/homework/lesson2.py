#ფინანსების მენეჯმენტი
amount = int(input("how much money do you have saved up?: "))
per_year = int(input("how much do you save up per year?: "))
how_long = int(input("how long are you planing to keep saving up?: "))

new_money = per_year * how_long
print(amount + new_money)

#player score traker
score = int(input("what is your current score?: "))

if score >= 100:
    print("next level unlocked")
else:
    print("you need to work more to unlock this level!")