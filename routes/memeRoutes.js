const { Router } = require("restify-router");
const MemeController = require("../controllers/memeController");
const AuthController = require("../controllers/authController");

const routerInstance = new Router();

/*
 * Todas as rotas verificam se o token é válido antes de excutar
 * a função correspondente à rota, presente no Controller de memes.
 */
/*
 * Rota de post para o endpoint meme.
 * Executa a função para criar memes.
 */
routerInstance.post(
    "/meme",
    AuthController.validateToken,
    MemeController.create
);
/*
 * Rota de patch (update) para o endpoint meme.
 * No endpoint é necessário passar a id do meme a ser atualizado.
 * Executa a função para atualizar memes.
 */
routerInstance.patch(
    "/meme/:id",
    AuthController.validateToken,
    MemeController.update
);
/*
 * Rota get para o endpoint meme.
 * Executa a função de buscar todos os memes.
 */
routerInstance.get(
    "/meme",
    AuthController.validateToken,
    MemeController.search
);
/*
 * Rota get para o endpoint meme.
 * No endpoint é necessário passar a id do meme a ser buscado.
 * Executa a função para buscar um meme de acordo com sua id.
 */
routerInstance.get(
    "/meme/:id",
    AuthController.validateToken,
    MemeController.searchWithId
);
/*
 * Rota delete para o endpoint meme.
 * No endpoint é necessário passar a id do meme a ser deletado.
 * Executa a função de remoção de memes.
 */
routerInstance.del(
    "/meme/:id",
    AuthController.validateToken,
    MemeController.remove
);

module.exports = routerInstance;
