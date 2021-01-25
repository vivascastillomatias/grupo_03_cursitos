const {sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
        user_id: DataTypes.INTEGER,
        course_id: DataTypes.INTEGER,
        price: DataTypes.FLOAT,
        state: DataTypes.INTEGER,
        assessment: DataTypes.INTEGER,
    })
    Sale.associate = models => {
        Sale.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
        Sale.belongsTo(models.Course, {
            as: 'course',
            foreignKey: 'course_id'
        })
    }
    return Sale
}