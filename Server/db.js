const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'Momiji21',
        database: 'postgres',
        port: 5432
    }
});