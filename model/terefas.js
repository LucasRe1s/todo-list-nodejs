const Sequelize = require('sequelize');
const database = require('./db');

const Tarefa = database.define('terefa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
            type: Sequelize.STRING,
            allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Tarefa;