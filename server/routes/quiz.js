module.exports = [
  {
    method: "GET",
    path: "/api/v1/quiz",
    handler: (req, res) => {
      return `<h1>Quiz Route.</h1>`;
    }
  }
];
