const { createToken } = require('../auth/jwtFunctions');
const { validateNewUser } = require('./validations/validateUser');
const { User } = require('../models');

const createUser = async (user) => {
    const checkUserFields = validateNewUser(user);
    if (checkUserFields.type) return checkUserFields;

    const userExists = await User.findOne({ where: { email: user.email } });
    if (userExists) return { type: 'USER_EXISTS', message: 'User already registered' };

    const newUser = await User.create(user);
    const { password: _password, ...userWithoutPassword } = newUser.dataValues;
    const token = createToken(userWithoutPassword);
    return { token };
};

module.exports = { createUser };