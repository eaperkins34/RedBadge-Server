require('dotenv').config();


var express = require('express');
var bodyParser = require('body-parser');
var sequelize = require('./db');
var path = require('path');

/******CONTROLLERS******/
var business = require('./controllers/business-controller');
var user = require('./controllers/user-controller');
var theme = require('./controllers/theme-controller')

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
/****ASSOCIATIONS****/
// var Theme = require('./models/theme')
// var Business = require('./models/business')

app.use('/business', business);
app.use('/user', user);
app.use('/theme', theme)

// Theme.belongsTo(Business);
// Business.hasMany(Theme);

sequelize.sync();


app.listen(3000, () => {
    console.log('app is on 3000')
})