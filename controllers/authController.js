require("dotenv").config();
const axios = require("axios");
const authAxios = axios.create({
    baseURL: process.env.AUTH_URL,
});

module.exports = {
    /**
     * @name login Valida as credenciais do usuário e envia para o usuário um JSON
     * contendo os dados do login,
     * caso sucesso ou um JSON contendo uma mensagem de erro, caso falhe.
     * @param req Requisição recebida.
     * @param res Resposta enviada.
     */
    login: (req, res) => {
        let url = "/login";
        let data = req.body;

        authAxios
            .post(url, data)
            .then((response) => {
                return res.json(response.status, response.data);
            })
            .catch((error) => {
                return res.json(error.response.status, error.response.data);
            });
    },
    /**
     * @name validateToken Valida o token recebido no header e envia um erro
     * caso o token seja inválido ou inexistente.
     * @param req Requisição recebida.
     * @param res Resposta enviada.
     * @param next Termina a execução.
     */
    validateToken: (req, res, next) => {
        let url = "/validateToken";
        let token = req.headers.token;

        if (!token) {
            return res.json(400, { error: "Token inexistente" });
        } else {
            let config = {
                headers: {
                    token: token,
                },
            };
            authAxios
                .post(url, {}, config)
                .then((response) => {
                    next();
                })
                .catch((error) => {
                    return res.json(error.response.status, error.response.data);
                });
        }
    },
};
