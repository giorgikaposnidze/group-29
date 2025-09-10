// 1
function checkEvenOdd(num) {
  console.log(num % 2 === 0 ? "ლუწია" : "კენტია");
}

// 2
function togglePhoto(action) {
  let img = document.getElementById("photo");
  img.style.display = (action === "show") ? "block" : "none";
}

// 3
function checkVote() {
  let p1 = { name: "გიო", age: 22, city: "თბილისი" };
  let p2 = { name: "სოფო", age: 25, city: "თბილისი" };
  if (p1.age > 18 && p2.age > 18 && p1.city === "თბილისი" && p2.city === "თბილისი") {
    console.log("you can vote in tbilisi");
  }
}

// 4
function compareAndClean(a1, c1, a2, c2) {
  let pop = { თბილისი: 1000000, ბათუმი: 200000, ქუთაისი: 150000 };
  let o1 = { age: a1, city: c1 };
  let o2 = { age: a2, city: c2 };

  console.log(a1 > a2 ? "o1 ასაკი მეტია" : a2 > a1 ? "o2 ასაკი მეტია" : "ასაკები ტოლია");

  console.log(
    (pop[c1] || 0) > (pop[c2] || 0)
      ? c1 + " მეტად დასახლებულია"
      : (pop[c2] || 0) > (pop[c1] || 0)
      ? c2 + " მეტად დასახლებულია"
      : "ტოლია ან უცნობი ქალაქებია"
  );

  if (a1 < a2) delete o1.age;
  else if (a2 < a1) delete o2.age;

  if ((pop[c1] || 0) < (pop[c2] || 0)) delete o1.city;
  else if ((pop[c2] || 0) < (pop[c1] || 0)) delete o2.city;

  console.log("o1:", o1, "o2:", o2);
}
