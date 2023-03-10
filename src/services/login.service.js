const { createToken } = require('../auth/jwtFunctions');
const { User } = require('../models');

const login = async (email, password) => {
    // [Será validado que não é possível fazer login com um usuário que não existe]
    const user = await User.findOne({ where: { email, password } });
    if (!user) return { type: 'INVALID_FIELDS', message: 'Invalid fields' };
    // Remove a senha do retorno da função
    const { password: _password, ...userWithoutPassword } = user.dataValues;
    // Gerando Token
    const token = createToken(userWithoutPassword);
    // O retorno deve ser o token
    return { token };
};

module.exports = { login };