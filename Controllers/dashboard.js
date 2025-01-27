exports.index = (req, res) => {
    res.render('index', { title: 'Dashboard' });
}

exports.account = (req, res) => {
    const view = req.params.view || '1'; // Default to '0' if not provided
    res.render('patients/account', { view: view, title: 'Account' });
}

exports.diagnosis = (req, res) => {
    res.render('patients/partials/diagnosis', { title: 'Diagnosis' });
}