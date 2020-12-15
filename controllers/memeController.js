const Meme = require("../models/Meme");

module.exports = {
    /**
     * @name create Cria um meme para o gerador.
     * @returns Retorna um status 201 e um JSON com o conteúdo do meme criado,
     * caso sucesso ou um erro com status 400, caso falhe.
     * @param req
     * @param res
     */
    create: async (req, res) => {
        try {
            let response = await Meme.create(req.body);
            return res.json(201, response);
        } catch (e) {
            return res.json(400, { error: "Erro ao criar meme" });
        }
    },
    /**
     * @name update Atualiza um meme presente no gerador a partir de uma id.
     * @returns Retorna um status 200 e um JSON com o conteúdo atualizado do banco,
     * caso sucesso ou um erro com status 400, caso falhe.
     * @param req
     * @param res
     */
    update: async (req, res) => {
        let { id } = req.params;

        try {
            let response = await Meme.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            return res.json(200, response);
        } catch (e) {
            return res.json(400, { error: "Erro ao atualizar meme" });
        }
    },
    /**
     * @name search Busca todos os memes presentes no banco de dados.
     * @returns Retorna um status 200 e um JSON com todo conteúdo presente na
     * collection "memes" do banco, caso sucesso ou um erro com status 404,
     * caso falhe.
     * @param req
     * @param res
     */
    search: async (req, res) => {
        try {
            let response = await Meme.find();
            return res.json(200, response);
        } catch (e) {
            return res.json(404, { error: "Erro ao buscar memes" });
        }
    },
    /**
     * @name searchWithId Busca um meme a partir de sua id.
     * @returns Retorna um status 200 e um JSON com o conteúdo do objeto
     * com o id informado, caso sucesso ou um erro com status 404, caso falhe.
     * @param req
     * @param res
     */
    searchWithId: async (req, res) => {
        let { id } = req.params;

        try {
            let response = await Meme.findById(id);
            return res.json(200, response);
        } catch (e) {
            return res.json(404, { error: `Erro ao buscar meme. ID: ${id}` });
        }
    },
    /**
     * @name remove Remove um meme a partir de uma id.
     * @returns Retorna um status 204 (No-content), caso sucesso ou um erro
     * com status 400, caso falhe.
     * @param req
     * @param res
     */
    remove: async (req, res) => {
        let { id } = req.params;

        try {
            await Meme.findByIdAndRemove(id);
            return res.send(204);
        } catch (error) {
            return res.json(400, { error: "Erro ao remover meme" });
        }
    },
};
