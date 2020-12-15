const restify = require("restify");
const mongoose = require("mongoose");
require("dotenv").config();

const DB = require("./database");
const authRouter = require("./routes/authRoutes");
const memeRouter = require("./routes/memeRoutes");
const server = restify.createServer();

/*
 * Configurações das rotas.
 */
authRouter.applyRoutes(server, "/auth");
memeRouter.applyRoutes(server);

/*
 * Necessário para o servidor parsear o corpo
 * e a url da requisição.
 */
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.listen(process.env.PORTA, function () {
    console.log("Servidor rodando...");

    /*
     * Conexão com o DB.
     */
    mongoose.connect(DB.DB_URL, DB.DB_CONFIG, (error) => {
        if (!error) {
            console.log("MongoDB Conectado!");
        } else {
            console.log("Erro ao conectar no MongoDB");
        }
    });
});
