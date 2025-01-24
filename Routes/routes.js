const express = require('express');
const router = express.Router();
const Dashboard = require('../Controllers/dashboard');

router.get('/', Dashboard.index);

module.exports = router;