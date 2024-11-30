const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",   
});

const initDb = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: false});
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sequelize, initDb };
