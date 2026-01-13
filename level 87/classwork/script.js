// 1
class Student {
  constructor(name, surname, age, academy, group, favColor, favLanguage) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.academy = academy;
    this.group = group;
    this.favColor = favColor;
    this.favLanguage = favLanguage;
  }

  logName() {
    console.log(this.name + " " + this.surname);
  }
}

const student1 = new Student(
  "Giorgi",
  "Kaposnidze",
  11,
  "GOA Academy",
  "Group 29",
  "Blue",
  "JavaScript"
);

student1.logName();


// 2
class ProgrammingLanguage {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const language = new ProgrammingLanguage("JavaScript", 1995);

console.log(language);