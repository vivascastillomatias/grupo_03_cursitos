const {sequelize, DataTypes, Categorie} = require('sequelize');

module.exports = ( sequelize, DataTypes ) => {
    const Course = sequelize.define(
        'Course',
        {
            name: DataTypes.STRING,
            short_description: DataTypes.STRING,
            description: DataTypes.STRING(1200),
            category: DataTypes.INTEGER,
            price: DataTypes.FLOAT,
            discount: DataTypes.FLOAT,
            link: DataTypes.STRING,
            image: DataTypes.STRING,
            owner: DataTypes.INTEGER,
        })
        Course.associate = models => {
            Course.belongsTo(models.Categorie, {
                as: 'categoryCourse',
                foreignKey: 'category'
            })
            Course.belongsTo(models.User, {
                as: 'ownerCourse',
                foreignKey: 'owner'
            })
        }
        return Course

}