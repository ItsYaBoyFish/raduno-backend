const { Sequelize } = require('sequelize');

if (process.env.NODE_ENV="production") {
  var db = new Sequelize('znr2as7eczh0w81j','z0xclpus1k3loekg','dth5gy96poigx66h',{
    host: 'ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
  })
} else {
  var db = new Sequelize('radunoDB', 'active', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });
}

console.log(db);

db
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = db;