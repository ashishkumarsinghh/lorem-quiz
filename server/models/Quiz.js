const mongoose = require("mongoose");
const schema = mongoose.Schema;

const QuizSchema = new Schema({
  title: String,
  questions: Array,
  author: String
});

module.exports = mongoose.model("Quiz", QuizSchema);
