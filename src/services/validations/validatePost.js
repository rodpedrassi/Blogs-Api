const { Category } = require('../../models');

const validateNewPost = async (categoriesId) => {
    const categories = await Promise.all(categoriesId
      .map((cate) => Category.findByPk(cate)));
    const checkForNull = categories.every((category) => category !== null);
    if (!checkForNull) {
        return { type: 'INVALID_VALUE', message: 'one or more "categoryIds" not found' };
    }
    return { type: null, message: '' };
  };

module.exports = { validateNewPost };