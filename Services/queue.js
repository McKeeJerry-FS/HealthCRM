const { get } = require('jquery');
const db = require('../config/db');
const { getAccounts } = require('../Controllers/dashboard');

module.exports = {
    getAccounts: async () => {
        const data = await db('accounts')
        .select('*');
        console.log(data[0]);
        return data;
    },
    getPatientAccount: async (patientId) => {
        const data = await db('accounts')
        .select('*')
        .where({'patient_id' : patientId});
        console.log(data);
        return data[0];
    },

    // *******************************************************
    // INSERT Queries
    // *******************************************************

    insertNewAccount: async (account, firstName, lastName, address1, address2, city, state, zip, phone1, phone2, email) => {
        const data = await db('accounts')
        .insert({
            'account' : account,
            'first_name' : firstName,
            'last_name' : lastName,
            'address1' : address1,
            'address2' : address2,
            'city' : city,
            'state' : state,
            'zip' : zip,
            'phone1' : phone1,
            'phone2' : phone2,
            'email' : email
        });
        console.log(data);
        return data;
    },
};