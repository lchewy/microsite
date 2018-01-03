const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/microsite', {
  logging: false,
  operatorsAliases: false
});

const User = db.define('users',
{
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    zip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    st:{
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = {
  db,
  User
};