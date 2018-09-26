const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  title: String,
  author: String
});

module.exports = mongoose.model("Quiz", QuizSchema);
