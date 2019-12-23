const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const cart = sequelize.define('cart', {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
   }
})

module.exports = cart