require("dotenv").config();

/**
 * DB_URL: url do banco de dados.
 * DB_CONFIG: configuração necessária para o banco de dados.
 */
const DB_URL = process.env.DB_URL;

const DB_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: process.env.DB_NAME,
};

module.exports = {
    DB_URL,
    DB_CONFIG,
};
