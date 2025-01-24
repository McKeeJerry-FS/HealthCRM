const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejs = require('ejs');

const port = 3000;
app.set('views', __dirname + './views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});