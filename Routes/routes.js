const express = require('express');
const router = express.Router();
const Dashboard = require('../Controllers/dashboard');

router.get('/', Dashboard.dashboard);
router.get('/account/:view', Dashboard.account);
router.get('/home', Dashboard.index);
// router.get('/cs_rep', Dashboard.getAccounts);



module.exports = router;