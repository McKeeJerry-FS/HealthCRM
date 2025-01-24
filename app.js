const express = require('express');
const app = express();

require('dotenv').config();
const mongoose = require('mongoose');
const expressEJSLayouts = require('express-ejs-layouts');
const session = require('express-session');
const momment = require('moment');
const moment_tz = require('moment-timezone');
const hotkeys = require('hotkeys-js');
const passport = require('passport');
const flash = require('connect-flash');
const zipcodeToTimezone = require('zipcode-to-timezone');
const Knex = require('knex');
const ejs = require('ejs');

const port = 3000;
app.set('views', __dirname + './views');
app.set('view engine', 'ejs');
app.use(expressEJSLayouts);

// BodyParser
app.use(express.urlencoded({ extended: true }));
// Static Files
app.use(express.static('public'));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Flash
app.use(flash());
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.info_msg = req.flash('info_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

// Locals - exposed to each views
app.locals.moment = momment;
app.locals.moment_tz = moment_tz;
app.locals.hotkeys = hotkeys;  
app.locals.zipcodeToTimezone = zipcodeToTimezone;

// Allow json body
app.use(express.json());

// Routes
//app.use('/', require('./routes/routes.js'));


app.get('/', (req, res) => {
    res.send('Hello World!');
    });

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { title: 'An error has occurred', error: err });
}

app.use(errorHandler);
console.log('Error handler added.');
console.log('App started.');
console.log('http://localhost:3000');
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});