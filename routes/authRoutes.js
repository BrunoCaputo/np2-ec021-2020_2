const { Router } = require("restify-router");
const AuthController = require("../controllers/authController");

const routerInstance = new Router();

routerInstance.post("/login", AuthController.login);

module.exports = routerInstance;
