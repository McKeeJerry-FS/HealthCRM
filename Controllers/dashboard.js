exports.index = (req, res) => {
    res.render('index', { title: 'Dashboard' });
}

exports.account = (req, res) => {
    res.render('account', { title: 'Account' });
}