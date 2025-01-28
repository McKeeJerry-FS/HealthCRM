const { get } = require('jquery');
const db = require('../config/db');
const { getAccounts } = require('../Controllers/dashboard');

module.exports = {
    getAccounts: async () => {
        const data = await db('accounts')
        .select('*');
        console.log(data[0]);
        return data;
    }
    


};