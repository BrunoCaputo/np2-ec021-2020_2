const restify = require("restify");
const mongoose = require("mongoose");
require("dotenv").config();

const DB = require("./database");
const authRouter = require("./routes/authRoutes");
const memeRouter = require("./routes/memeRoutes");
const server = restify.createServer();

authRouter.applyRoutes(server, "/auth");
memeRouter.applyRoutes(server);

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.listen(process.env.PORTA, function () {
    console.log("Servidor rodando...");

    // Conexão com o BD
    mongoose.connect(DB.DB_URL, DB.DB_CONFIG, (error) => {
        if (!error) {
            console.log("MongoDB Conectado!");
        } else {
            console.log("Erro ao conectar no MongoDB");
        }
    });
});
