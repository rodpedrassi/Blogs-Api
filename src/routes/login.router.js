const express = require('express');

const router = express.Router();

const { loginController } = require('../controllers');
const checkLogin = require('../middlewares/checkLogin');

router.post('/', 
checkLogin,
loginController.login);

module.exports = router;