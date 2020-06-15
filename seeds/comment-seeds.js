const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Very interesting",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Wow, I didn't know that!",
        user_id: 2,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;