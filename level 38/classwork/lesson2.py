def element_remover(user_list, index_to_remove):
    if 0 <= index_to_remove < len(user_list):
        removed_element = user_list.pop(index_to_remove)
        print(f"ელემენტი '{removed_element}' ამოიღეს სიიდან.")
    else:
        print("ვერ მოხერხდა ელემენტის ამოღება: ინდექსი გადის სიაში.");

element_remover([1, 2, 3, 4, 5], 2)
element_remover(['apple', 'banana', 'cherry'], 1)
element_remover([10, 20, 30, 40], 5)
