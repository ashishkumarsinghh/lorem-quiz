const Quiz = require("../models/Quiz");

module.exports = [
  {
    method: "GET",
    path: "/api/v1/quizzes",
    handler: (req, res) => {
      return Quiz.find();
    }
  },
  {
    method: "POST",
    path: "/api/v1/quizzes",
    handler: (req, res) => {
      const { title, author } = req.payload;
      const quiz = new Quiz({ title, author });
      quiz.save(function(err) {
        if (err) console.log(err);
      });
      return `saved`;
    }
  }
];
