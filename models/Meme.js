const { Schema, model } = require("mongoose");

/**
 * Esquema do banco de dados.
 * @titulo Nome do meme.
 * @descricao Descrição do meme.
 * @ano Ano em que o meme surgiu.
 * @timestamps utilizado para criação dos campos
 * createdAt e updatedAt.
 */
const MemeSchema = new Schema(
    {
        titulo: String,
        descricao: String,
        ano: Number,
    },
    {
        timestamps: true,
    }
);

module.exports = model("Meme", MemeSchema);
