const MyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const myNum = Math.round(Math.random());

    console.log("Generated number:", myNum);

    if (myNum === 0) {
      resolve("success");
    } else {
      reject("failure");
    }
  }, 5000);
});

MyPromise
  .then(result => console.log("Resolved:", result))
  .catch(error => console.log("Rejected:", error));