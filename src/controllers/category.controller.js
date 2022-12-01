const { categoryService } = require('../services');
// const { mapError } = require('../utils/errorMap');

const createCategory = async (req, res) => {
    const { message } = await categoryService.createCategory(req.body);
    // const { type, message } = category;
    // if (type) return res.status(mapError(type)).json({ message });
    return res.status(201).json(message);
};

module.exports = { createCategory };