const express = require('express');
const jwtValidade = require('../auth/jwtValidade');

const router = express.Router();

const { postController } = require('../controllers');
const checkPost = require('../middlewares/checkPost');

router.post('/', jwtValidade, checkPost, postController.createPost);

module.exports = router;