exports.index = (req, res) => {
    res.render('index', { title: 'Dashboard' });
}

exports.account = (req, res) => {
    const view = req.query.view || '0'; // Default to '0' if not provided
    res.render('patients/account', { view, title: 'Account' });
}