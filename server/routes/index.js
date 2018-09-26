const quiz = require("./quiz");
const index = [
  {
    method: "GET",
    path: "/api/v1",
    handler: (req, res) => {
      return `<h1>Hello. This is Quiz Api Version 1. !</h1>`;
    }
  }
];
module.exports = [].concat(quiz, index);
