const express = require('express');
const router = express.Router();
const Dashboard = require('../Controllers/dashboard');

router.get('/', Dashboard.dashboard);
router.get('/home', Dashboard.index);
router.get('/account/:patient_id/:view?', Dashboard.account);
// router.get('/cs_rep', Dashboard.getAccounts);



module.exports = router;