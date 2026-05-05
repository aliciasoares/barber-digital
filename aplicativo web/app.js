const sequelize = require("./database/dbconfig");
const server = require("./server");

async function run() {
    const port = 8080

    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync({ alter: true });
        console.log('Modelos sincronizados com o banco de dados.');

        server.port = port;
        server.listen();

    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }

    }

    run();