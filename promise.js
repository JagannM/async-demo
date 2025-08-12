/* //creating promise object

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
); */

/* //Promise based approach
console.log("before");
//const p = getuser(1);
//p.then((user) => console.log("User info:", user));
getuser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repos) => getCommits(repos[1]))
  .then((commits) => console.log("commits", commits))
  .catch((err) => console.log("Error", err.message));
console.log("after"); */

//Async and Await approach
async function displaycommits() {
  try {
    const user = await getuser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos);
    console.log("commits");
  } catch (err) {
    console.log("error", err.message);
  }
}
displaycommits();

function getuser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading user from db.....");
      resolve({ id: id, gitHubUsername: "jagan" });
    }, 2000);
  });
}

function getRepositories(gitHubUsername) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading repos from github....");
      resolve(["repo1", "repo2", "repo3"]);
      //reject(new Error("could not get the repos..."));
    }, 2000);
  });
}

function getCommits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading commits from github API....");
      resolve(["commits"]);
    }, 2000);
  });
}
