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
    development_2: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'Momiji2024!',
            database: 'Healthcare_CRM',
            port: 5432
        }
    },
    development_3: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'Momiji24',
            database: 'Healthcare_CRM',
            port: 5433
        }
    },
    development_4: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'Momiji25!',
            database: 'Healthcare_CRM',
            port: 5432
        }
    },
};