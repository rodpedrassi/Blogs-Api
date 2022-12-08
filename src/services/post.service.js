const { BlogPost, PostCategory, sequelize } = require('../models');
const { validateNewPost } = require('./validations/validatePost');

const createPost = async ({ title, content, categoryIds }, token) => {
    const { id } = token.data;
    const { type, message } = await validateNewPost(categoryIds);
    if (type) return { type, message };

    try {
      const result = await sequelize.transaction(async (t) => {
        const post = await BlogPost.create({ title, content, userId: id }, { transaction: t });
        const arrayPostCategory = categoryIds
          .map((i) => ({ postId: post.dataValues.id, categoryId: i }));
        await PostCategory.bulkCreate(arrayPostCategory, { transaction: t });
        // const array = categoryIds
        // .map((i) => (PostCategory.create({ postId: post.dataValues.id, categoryId: i },
        //      { transaction: t })));
        // await Promise.all(array);
        return { type: '', message: post };
      });
      return result;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

module.exports = { createPost };