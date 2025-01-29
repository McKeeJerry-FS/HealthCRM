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
        return data;
    }
};