require('dotenv').config();

module.exports = {

    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'Momiji21',
            database: 'Healthcare_CRM',
            port: 5432
        }
    },
};