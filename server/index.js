const hapi = require("hapi");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes/");

const server = hapi.server({
  port: 4000,
  host: "localhost"
});

const initVars = () => {
  dotenv.config();
};

const connectDB = () => {
  mongoose.connect(
    "mongodb://" +
      process.env.DBUSER +
      ":" +
      `${encodeURIComponent(process.env.DBPASS)}` +
      "@" +
      process.env.DBHOST,
    { useNewUrlParser: true }
  );
  mongoose.connection.once("open", () => {
    console.log("connected to database.");
  });
};

const init = async () => {
  initVars();
  connectDB();
  server.route(routes);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
