const express = require('express');
const jwtValidade = require('../auth/jwtValidade');

const router = express.Router();

const { categoryController } = require('../controllers');
const checkCategory = require('../middlewares/checkCategory');

router.post('/', 
jwtValidade,
checkCategory,
categoryController.createCategory);

router.get('/', 
jwtValidade, 
categoryController.findAllCategories);

module.exports = router;