// 1
let person = {
  name: "Giorgi",
  surname: "Kaposhvili",
  academy: "OpenAI Academy",
  num: 12345,
  favColor: "blue",
  isGoaStudent: true,

  greet: function() {
    console.log("hello");
  }
};

console.log("Person object:", person);

console.log("Person's name:", person.name);

person.greet();


// 2

console.log(true && true);   
console.log(true && false);  
console.log(false && true);   
console.log(false && false);  


console.log(true || true);    
console.log(true || false);   
console.log(false || true);   
console.log(false || false);  


// 3
let myObj = {
  prop1: "value1",
  prop2: 42,
  prop3: true,

  method1: function() {
    console.log("prop1 is:", this.prop1);
  },

  method2: function() {
    console.log("prop2 is:", this.prop2);
  },

  method3: function() {
    console.log("prop3 is:", this.prop3);
  }
};

// Call all
myObj.method1();
myObj.method2();
myObj.method3();
