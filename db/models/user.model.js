const { DataTypes } = require("sequelize");
const { sequelize } = require("../index");
 
const User = sequelize.define("User", {
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
});

module.exports = User;