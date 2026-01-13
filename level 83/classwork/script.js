// დავალება N1

// Push
const arrPush = [1, 2, 3];
console.log(arrPush.push(4));
console.log(arrPush);

// Pop
const arrPop = [10, 20, 30];
console.log(arrPop.pop());
console.log(arrPop);

// Shift
const arrShift = [100, 200, 300];
console.log(arrShift.shift());
console.log(arrShift);

// დავალება N2
// 1
let arr = [1, 2, 3, 4, 5];

arr.splice(2, 3, "a", "b", "c");
console.log(arr);


// 2
let arr2 = [1,2,3,4,5,6,7,8,9,10];
arr2.splice(5, 5);
console.log(arr2);

// დავალება N3

let names = ["გიორგი", "ნიკოლოზი", "ნიკოლოზი", "ლუკა", "დათუნა", "ალექსანდრე", "ბატონი დათა",];

names.sort();
console.log(names);