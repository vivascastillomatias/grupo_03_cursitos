const { Course, Sale, Sequelize } = require("../../database/models")
const Op = Sequelize.Op

module.exports = {
    list5: async (req, res) => {
        try {
            const allSales = await Sale.findAll({ 
                limit: 5,
                include: ['course','user'],
                order:[[Sequelize.col("createdAt"), "DESC"]]
            });
            let count = allSales.length;
            res.json({count ,allSales})
        } catch (error) {
            console.log(error)
        }
    },
    bestSale: async (req, res) => {
        try {
            const bestSaleCourse = await Sale.findOne({
                attributes: [[Sequelize.fn('COUNT', Sequelize.col('course_id')), 'saleCount']],
                include: ['course'],
                group: ['course_id'],
                order:[[Sequelize.col("saleCount"), "DESC"]]
            });
            res.json({bestSaleCourse})
        } catch (error) {
            console.log(error)
        }
    },
    bestBuyer: async (req, res) => {
        try {
            const bestBuyer = await Sale.findOne({
                attributes: [[Sequelize.fn('COUNT', Sequelize.col('user_id')), 'userCount']],
                include: ['user'],
                group: ['user_id'],
                order:[[Sequelize.col("userCount"), "DESC"]]
            });
            res.json({bestBuyer})
        } catch (error) {
            console.log(error)
        }
    }
}