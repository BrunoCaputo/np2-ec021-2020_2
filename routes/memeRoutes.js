const { Router } = require("restify-router");
const MemeController = require("../controllers/memeController");
const AuthController = require("../controllers/authController");

const routerInstance = new Router();

routerInstance.post(
    "/meme",
    AuthController.validateToken,
    MemeController.create
);
routerInstance.patch(
    "/meme/:id",
    AuthController.validateToken,
    MemeController.update
);
routerInstance.get(
    "/meme",
    AuthController.validateToken,
    MemeController.search
);
routerInstance.get(
    "/meme/:id",
    AuthController.validateToken,
    MemeController.searchWithId
);
routerInstance.del(
    "/meme/:id",
    AuthController.validateToken,
    MemeController.remove
);

module.exports = routerInstance;
