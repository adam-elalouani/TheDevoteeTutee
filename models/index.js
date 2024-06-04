const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './tutorsdatabase.db'  
});

const User = require('./user')(sequelize);
const Meeting = require('./meeting')(sequelize);
const Tutor = require('./tutor')(sequelize);  

sequelize.sync();

module.exports = { sequelize, User, Meeting, Tutor };