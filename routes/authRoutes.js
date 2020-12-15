const { Router } = require("restify-router");
const AuthController = require("../controllers/authController");

const routerInstance = new Router();

/**
 * Rota de post para o endpoint login, executando a função de
 * login presente no controller de autenticação
 */
routerInstance.post("/login", AuthController.login);

module.exports = routerInstance;
