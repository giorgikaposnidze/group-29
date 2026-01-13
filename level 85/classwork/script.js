let movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Fight Club"];

let randomIndex = Math.floor(Math.random() * movies.length);

let randomMovie = movies[randomIndex];

console.log(randomMovie);

// 2
const currentTime = new Date();

const day = currentTime.getDate();
const monthIndex = currentTime.getMonth();
const year = currentTime.getFullYear();

const months = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
"ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"];

console.log(formattedDate);

// 3

let seconds = 0;

const interval = setInterval(() => {
  seconds++;
  console.log(`now is ${seconds} second`);

  if (seconds >= 60) {
    clearInterval(interval);
    console.log("interval ended");
  }
}, 1000);