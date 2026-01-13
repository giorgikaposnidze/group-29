// 1
// ასინქრონიზაცია:
// კოდის შესრულება ისე, რომ ზოგი ოპერაცია პარალელურად/დაყოვნებით იმუშაოს,
// და არ ბლოკავს დანარჩენ პროგრამას.

// ასინქრონული ოპერაცია:
// მოქმედება, რომელიც სრულდება გარკვეული დროის შემდეგ ან ფონში.
// მაგ: setTimeout, fetch, Promise.

// Promise ობიექტი:
// ასინქრონული ოპერაციის შედეგის წარმომადგენელი.
// მას აქვს მდგომარეობები (states).

// Promise-ის მდგომარეობები:
//   - pending: ჯერ კიდევ მიმდინარეობს
//   - resolved: წარმატებით დასრულდა
//   - rejected: შეცდომით/წარუმატებლად დასრულდა

// setTimeout:
// ფუნქცია, რომელიც ასრულებს კოდს გარკვეული დროის შემდეგ.

// 2
// Promise Object
//    ┌───────────────┐
//    │   PENDING     │
//    └──────┬────────┘
//           │
//   ┌───────┴────────┐
//   │                │
// RESOLVED        REJECTED

// 3
const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const students = [
      "Giorgi", "giorgi", "Luka", "Mariam", "Sandro",
      "Keti", "nikoloz", "nikoloz", "Dato", "Saba"
    ];

    const randomIndex = Math.floor(Math.random() * students.length);
    const chosenName = students[randomIndex];

    console.log("Randomly chosen:", chosenName);

    if (chosenName.length > 5) {
      resolve("success");
    } else {
      reject("failure");
    }
  }, 5000);
});

console.log(myPromise3);