def greet(name="Goal", surname="Orientadze"):
    return f"Hello {name} {surname}!"

result = greet("John", "Doe")
print(result)

default_result = greet()
print(default_result)