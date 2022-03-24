const Sequelize = require('sequelize');

const sequelize = new Sequelize('bdbienesraices', 'rsoibrrtodudup', '7f6568f102d3e5a067aa4896ac15f979c5f1bdf2d85b620575bd7d1c6b01fb7a', {
  host: '127.0.0.1',
  // una de estas opciones dependiendo el gestor de la base
  dialect: 'mysql',
})

module.exports = sequelize;