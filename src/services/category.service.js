const { Category } = require('../models');

const createCategory = async (category) => {
    const newCategory = await Category.create(category);
    return { type: '', message: newCategory.dataValues };
};

const findAllCategories = async () => {
    const data = await Category.findAll();
    const categories = data.map(({ dataValues }) => dataValues);
    return categories;
};

module.exports = { createCategory, findAllCategories };