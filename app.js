require('dotenv').config();

var express = require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');

/******CONTROLLERS******/
var business = require('./controllers/business-controller');
var user = require('./controllers/user-controller');
var theme = require('./controllers/theme-controller')

sequelize.sync();
app.use(bodyParser.json())

app.use('/business', business);
app.use('/user', user);
app.use('/theme', theme)

app.listen(3000, () => {
    console.log('app is on 3000')
})