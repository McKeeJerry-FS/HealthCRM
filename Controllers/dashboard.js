const Queue = require('../Services/queue');

// exports.getAccounts = async (req, res) => {
//     var accounts = await Queue.getAccounts();
//     res.send(accounts)
// }


exports.index = (req, res) => {
    res.render('index', { title: 'Dashboard' });
}

exports.dashboard = async (req, res) => {
    try {
        const accounts = await Queue.getAccounts();
        res.render('dashboard/cs_rep', { title: 'Customer Service Representative Dashboard', accounts: accounts });
    } catch (error) {
        res.status(500).send('Error retrieving accounts');
    }
}

exports.account = async (req, res) => {
    const view = req.params.view || '0'; // Default to '0' if not provided
    const patientId = req.params.patient_id;

    try {
        const patient = await Queue.getPatientAccount(patientId); // Assuming you have a method to get patient by ID
        res.render('patients/account', { title: 'Account', patient: patient, view: view, });
    } catch (error) {
        res.status(500).send('Error retrieving patient data');
    }
}
