const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'kuldeepjadon@18', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;