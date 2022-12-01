const { categoryService } = require('../services');
// const { mapError } = require('../utils/errorMap');

const createCategory = async (req, res) => {
    const { message } = await categoryService.createCategory(req.body);
    return res.status(201).json(message);
};

const findAllCategories = async (req, res) => {
    const categories = await categoryService.findAllCategories();
    return res.status(200).json(categories);
};

module.exports = { createCategory, findAllCategories };