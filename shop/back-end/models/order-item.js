const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const orderItem = sequelize.define('orderItem', {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
   },
   quantity: Sequelize.INTEGER
})

module.exports = orderItem