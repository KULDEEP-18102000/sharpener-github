const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  UserName: Sequelize.STRING,
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
