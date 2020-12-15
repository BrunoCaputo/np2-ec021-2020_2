require("dotenv").config();
const axios = require("axios");
const authAxios = axios.create({
    baseURL: process.env.AUTH_URL,
});

module.exports = {
    /**
     * @name login Valida as credenciais do usuário
     * @returns Retorna o status e o corpo da resposta
     * @param req Requisição recebida
     * @param res Resposta enviada
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
     * @name validateToken Valida o token recebido no header
     * @returns Retorna um erro caso o token seja inválido
     * @param req Requisição recebida
     * @param res Resposta enviada
     * @param next Termina a execução
     */
    validateToken: (req, res, next) => {
        let url = "/validateToken";
        let config = {
            headers: {
                token: req.headers.token,
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
    },
};
