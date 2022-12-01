const { Category } = require('../models');

const createCategory = async (category) => {
    const newCategory = await Category.create(category);
    return { type: '', message: newCategory.dataValues };
};

module.exports = { createCategory };