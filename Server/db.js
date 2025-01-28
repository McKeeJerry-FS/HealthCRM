const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'Momiji21',
        database: 'Healthcare_CRM',
        port: 5432
    }
});