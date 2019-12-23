const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const product = sequelize.define('product', {
   id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
   },
   name: {
      type: Sequelize.STRING,
      allowNull: false
   },
   price: {
      type: Sequelize.STRING,
      allowNull: false
   }

})

module.exports = product