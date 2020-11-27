const {sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user: DataTypes.STRING,
        email: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        image: DataTypes.STRING,
        bio: DataTypes.STRING,
        completed: DataTypes.BOOLEAN,
        password: DataTypes.INTEGER
    })
    return User
}