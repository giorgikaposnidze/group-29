def check_lowercase(user_str):
    for char in user_str:
        if not char.islower():  # თუ არ არის lowercase
            print(f"'{user_str}' არ არის მთლიანად lowercase.")
            return  # გამოდის ფუნქცია
    print(f"'{user_str}' არის მთლიანად lowercase.")

check_lowercase("hello")
check_lowercase("Hello")
check_lowercase("HELLO")
