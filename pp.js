const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("reading from fb");
    resolve(1);
    //reject(new Error("some error"));
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("reading from insta");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error: ", err.message));

/* Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("Error: ", err.message)); */
