const express = require('express');
const router = express.Router();
const Dashboard = require('../Controllers/dashboard');

router.get('/', Dashboard.index);
router.get('/account/:view', Dashboard.account);



module.exports = router;