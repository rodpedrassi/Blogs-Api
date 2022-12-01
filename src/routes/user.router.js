const express = require('express');

const router = express.Router();

const { userController } = require('../controllers');
const checkUser = require('../middlewares/checkUser');

router.post('/', 
checkUser,
userController.createUser);

module.exports = router;