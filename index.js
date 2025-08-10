/* console.log("Before");
setTimeout(() => {
  console.log("reading user from db");
}, 2000);
console.log("After"); */

console.log("Before");
const user = getuser(1);
console.log(user);
console.log("After");

function getuser(id) {
  setTimeout(() => {
    console.log("reading user from db");
    return { id: id, name: "jagan" };
  }, 2000);
}
