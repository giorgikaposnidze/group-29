def find_min_builtin(lst):
    return min(lst) if lst else None

my_list = [3, 1, 7, 0, -5, 10]
print(find_min_builtin(my_list))