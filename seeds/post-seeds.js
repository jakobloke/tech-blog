const { Post } = require('../models');

const postData = [
    {
        title: 'The importance of computing',
        content: 'There are many reasons why we should learn about computing and how to make it faster',
        user_id: 1
    },
    {
        title: 'Importance of security',
        content: 'It is important to encrypt passwords in order to protect users',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;