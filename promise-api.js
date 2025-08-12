/* const p = Promise.resolve({ id: 1, name: "jagan" });
p.then((result) => console.log("User:", result));

const p1 = Promise.reject(new Error("some error occurred"));
p1.catch((error) => console.log("Error:", error)); */

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("reading from fb");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("reading from insta");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2]).then((result) => console.log(result));
