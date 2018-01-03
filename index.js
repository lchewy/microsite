const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/microsite');

const User = db.define('user',
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
        type: Sequelize.INTEGER,
        allowNull: false
    },
    st:{
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = {
  User
};