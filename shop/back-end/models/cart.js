const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const cartItem = sequelize.define('cartItem', {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
   },
   quantity: Sequelize.INTEGER
})

module.exports = cartItem