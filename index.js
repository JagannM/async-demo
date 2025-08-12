//Async
/* console.log("Before");
setTimeout(() => {
  console.log("reading user from db");
}, 2000);
console.log("After"); */

//Async problem
/* console.log("Before");
const user = getuser(1);
console.log(user);
console.log("After");

function getuser(id) {
  setTimeout(() => {
    console.log("reading user from db");
    return { id: id, name: "jagan" };
  }, 2000);
} */

//Async problem handling

//Callback

/* console.log("Before");
getuser(1, (user) => {
  console.log("User info:", user);
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("Repos: ", repos);
  });
});
console.log("After");

function getuser(id, callback) {
  setTimeout(() => {
    console.log("reading user from db");
    callback({ id: id, gitHubUsername: "jagan" });
  }, 2000);
}

function getRepositories(gitHubUsername, callback) {
  setTimeout(() => {
    console.log("reading repos from github....");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
} */

//Callback Hell - solution
console.log("Before");
getuser(1, displayRepositories);
console.log("After");

function displayRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(repos, displaycommits);
}

function displaycommits(commits) {
  console.log(commits);
}

function getuser(id, callback) {
  setTimeout(() => {
    console.log("reading user from db");
    callback({ id: id, gitHubUsername: "jagan" });
  }, 2000);
}

function getRepositories(gitHubUsername, callback) {
  setTimeout(() => {
    console.log("reading repos from github....");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

/* //callback nesting and naming anonymous functions
console.log("Before");
getuser(1, displayuser);
console.log("After");

function displayuser(user) {
  console.log("User info:", user);
  getRepositories(user.gitHubUsername, displayRepositories);
}

function displayRepositories(repos) {
  console.log(repos);
}

function getuser(id, callback) {
  setTimeout(() => {
    console.log("reading user from db");
    callback({ id: id, gitHubUsername: "jagan" });
  }, 2000);
}

function getRepositories(gitHubUsername, callback) {
  setTimeout(() => {
    console.log("reading repos from github....");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
} */
