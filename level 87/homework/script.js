// 1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
const person1 = new Person("Giorgi", 20);
person1.greet();

// 2
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  printBrand() {
    console.log(`Car brand: ${this.brand}`);
  }
}
const car1 = new Car("Toyota", 2020);
const car2 = new Car("BMW", 2022);
car1.printBrand();
car2.printBrand();

// 3
class Animal {
  constructor(type) {
    this.type = type;
  }
  printType() {
    console.log(`Animal type: ${this.type}`);
  }
}
const animal1 = new Animal("Dog");
animal1.printType();

// 4
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
  printGrade() {
    console.log(`${this.name}'s grade is ${this.grade}`);
  }
}
const student1 = new Student("Nino", "A");
const student2 = new Student("Giorgi", "B");
const student3 = new Student("Luka", "C");
student1.printGrade();
student2.printGrade();
student3.printGrade();

// 5
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
const book1 = new Book("1984", "George Orwell");
console.log(book1.title, "-", book1.author);

// 6
class Phone {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
  checkPrice() {
    if (this.price > 1000) {
      console.log(`${this.model} is expensive.`);
    } else {
      console.log(`${this.model} is cheap.`);
    }
  }
}
const phone1 = new Phone("iPhone 15", 1200);
const phone2 = new Phone("Samsung A12", 250);
phone1.checkPrice();
phone2.checkPrice();