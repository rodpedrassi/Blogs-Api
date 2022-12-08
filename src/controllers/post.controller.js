const { postService } = require('../services');
const { mapError } = require('../utils/errorMap');

const createPost = async (req, res) => {
    const token = req.decoded;
    const { type, message } = await postService.createPost(req.body, token);
    if (type) return res.status(mapError(type)).json({ message });
    return res.status(201).json(message);
};

module.exports = { createPost };