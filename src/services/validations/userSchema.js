const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();
const displayNameSchema = Joi.string().min(8).required();
const emailSchema = Joi.string().email();
const passwordSchema = Joi.string().min(6).required();

const insertUserSchema = Joi.object({
    id: idSchema,
    displayName: displayNameSchema,
    email: emailSchema,
    password: passwordSchema,
  });

module.exports = {
    insertUserSchema,
    idSchema,
    displayNameSchema,
    emailSchema,
    passwordSchema,
};