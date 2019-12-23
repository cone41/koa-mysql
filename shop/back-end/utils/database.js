const Sequelize = require('sequelize')

const config = {
   host: 'localhost',
   user: 'root',
   password: 'zhucheng930726..',
   database: 'demo_sql'
}

const sequelize = new Sequelize(config.database, config.user, config.password, {
   host: config.host,
   dialect: 'mysql',
})
module.exports = sequelize