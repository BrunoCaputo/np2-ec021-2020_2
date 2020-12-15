const Meme = require("../models/Meme");

module.exports = {
    create: async (req, res) => {
        try {
            let response = await Meme.create(req.body);
            return res.json(201, response);
        } catch (e) {
            console.log(e);
            return res.json(400, { error: "Erro ao criar meme" });
        }
    },
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
    search: async (req, res) => {
        try {
            let response = await Meme.find();
            return res.json(200, response);
        } catch (e) {
            return res.json(404, { error: "Erro ao buscar memes" });
        }
    },
    searchWithId: async (req, res) => {
        let { id } = req.params;

        try {
            let response = await Meme.findById(id);
            return res.json(200, response);
        } catch (e) {
            return res.json(404, { error: `Erro ao buscar meme. ID: ${id}` });
        }
    },
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
