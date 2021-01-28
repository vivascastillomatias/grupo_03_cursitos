const { Categorie } = require("../../database/models/")

module.exports = {
    list: async (req, res) => {
        try {
            const allCategories = await Categorie.findAll();
            let count = allCategories.length;
            res.json({count ,allCategories})
        } catch (error) {
            console.log(error)
        }
    }
}