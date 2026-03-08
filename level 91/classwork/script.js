const generatePromise = (bool) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (bool === false) {
        resolve("success");
      } else {
        reject("failure");
      }
    }, 1000);
  });
};

Promise.all([
  generatePromise(false),
  generatePromise(false),
  generatePromise(false)
])
  .then(res => console.log(res))
  .catch(err => console.log(err));