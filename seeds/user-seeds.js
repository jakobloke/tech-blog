const { User } = require('../models');

const userData = [
    {
        username: 'jlo',
        password: 'test'
    },
    {
        username: 'lokage',
        password: 'test2'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;