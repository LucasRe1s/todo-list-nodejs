const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_list', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql' 
})
try {
    sequelize.authenticate();
    console.log('Conectado com sucesso.')
} catch (error) {
    console.log('Não foi possivel conectar:', error);
}

module.exports = sequelize;