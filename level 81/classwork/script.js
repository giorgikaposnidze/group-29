// N1
const languages = ["Java", "Python", "JavaScript", "C+", "C++", "Go", "Ruby"];

console.log(languages.findIndex(el => el > 8));


// ------------------------------
// N2
const technologies = [
  {
    name: "JavaScript",
    releaseYear: 1995,
    threadsCount: 1,
    usedInWebDev: true
  },
  {
    name: "Python",
    releaseYear: 1991,
    threadsCount: 1,
    usedInWebDev: true
  },
  {
    name: "Rust",
    releaseYear: 2010,
    threadsCount: "Multi-threaded", 
    usedInWebDev: false
  },
  {
    name: "React",
    releaseYear: 2013,
    threadsCount: 1,
    usedInWebDev: true
  },
  {
    name: "Go",
    releaseYear: 2009,
    threadsCount: "Highly concurrent (goroutines)",
    usedInWebDev: true
  }
];

// 1
const firstBefore2000 = technologies.find(tech => tech.releaseYear < 2000);
console.log(firstBefore2000);

// 2
const lastUsedInWebDev = [...technologies].reverse().find(tech => tech.usedInWebDev);
console.log(lastUsedInWebDev);

// N3
const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];

console.log(arr.indexOf(1));
console.log(arr.indexOf(5));

console.log(arr.lastIndexOf(1));
console.log(arr.lastIndexOf(5));