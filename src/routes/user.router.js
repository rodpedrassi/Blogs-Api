const express = require('express');
const jwtValidade = require('../auth/jwtValidade');

const router = express.Router();

const { userController } = require('../controllers');
const checkUser = require('../middlewares/checkUser');

router.post('/', checkUser, userController.createUser);

router.get('/', jwtValidade, userController.findAllUsers);

router.get('/:id', jwtValidade, userController.findUserById);

module.exports = router;