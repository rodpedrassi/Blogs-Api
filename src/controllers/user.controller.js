const { userService } = require('../services');
const { mapError } = require('../utils/errorMap');

const createUser = async (req, res) => {
    const token = await userService.createUser(req.body);
    const { type, message } = token;
    if (type) return res.status(mapError(type)).json({ message });
    return res.status(201).json(token);
};

const findAllUsers = async (req, res) => {
    const users = await userService.findAllUsers();
    return res.status(200).json(users);
};

const findUserById = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await userService.findUserById(id);
    if (type) return res.status(mapError(type)).json({ message });
    return res.status(200).json(message);
};

module.exports = {
    createUser,
    findAllUsers,
    findUserById,
};