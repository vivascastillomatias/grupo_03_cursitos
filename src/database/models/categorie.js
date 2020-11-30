const {sequelize, DataTypes} = require('sequelize');

module.exports = ( sequelize, DataTypes ) => {
    const Categorie = sequelize.define(
        'Categorie',
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            description: DataTypes.STRING(1200)
        })
        return Categorie
}