//creating promise object

const p = new Promise((resolve, reject) => {
  console.log("hi");
  setTimeout(() => {
    //resolve(1);
    reject(new Error("some error occured"));
  }, 2000);
});
//consuming result/reject of the promise object
p.then((result) => console.log("Result", result)).catch((err) =>
  console.log("error", err.message)
);
