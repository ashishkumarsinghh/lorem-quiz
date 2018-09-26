const hapi = require("hapi")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const server = hapi.server({
    port: 4000, 
    host: 'localhost'
})

const initVars = () => {
    dotenv.config();
}

const connectDB = () => {
    mongoose.connect("mongodb://"+process.env.DBUSER+":"+
    `${encodeURIComponent(process.env.DBPASS)}`+"@"+process.env.DBHOST, { useNewUrlParser: true });
    mongoose.connection.once("open", () => {
        console.log("connected to database.");
    })
};

const init = async () => {

    initVars();
    connectDB();
    server.route({
        method: "GET",
        path: '/',
        handler: (req, res) => {
            return `<h1>Hello from Hapi !</h1>`;
        }
    })
    await server.start()
    console.log(`Server running at: ${server.info.uri}`);
}

init();