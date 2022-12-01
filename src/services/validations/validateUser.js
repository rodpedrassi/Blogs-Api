const { displayNameSchema, emailSchema, passwordSchema } = require('./userSchema');

const validateNewUser = (user) => {
    const { displayName, email, password } = user;

    const { error: errorName } = displayNameSchema.validate(displayName);
    if (errorName) {
        return { type: 'INVALID_NAME', 
        message: '"displayName" length must be at least 8 characters long' }; 
    }

    const { error: errorEmail } = emailSchema.validate(email);
    if (errorEmail) return { type: 'INVALID_EMAIL', message: '"email" must be a valid email' };

    const { error: errorPassword } = passwordSchema.validate(password);
    if (errorPassword) {
        return { type: 'INVALID_PASSWORD', 
        message: '"password" length must be at least 6 characters long' }; 
    }

    return { type: null, message: '' };
};

module.exports = {
    validateNewUser,
};