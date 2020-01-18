const { Sequelize } = require('sequelize');

if (process.env.NODE_ENV="production") {
  var db = new Sequelize(process.env.JAWSDB)
} else {
  var db = new Sequelize('radunoDB', 'active', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });
}


db
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = db;