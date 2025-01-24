const { connection } = require('mongoose');

require('dotenv').config();

module.exports = {

    development: {
        client: ' ',
        connection: {
            host: ' ',
            user: ' ',
            password: ' ',
            database: ' ',
            charset: 'utf8'
        },
    },
};