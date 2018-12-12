require('dotenv').config();


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db');

require('./models')

app.use('/business', require('./controllers/business-controller'))
app.use('/theme', require('./controllers/theme-controller'))

app.use(bodyParser.json())

// sequelize.sync();
sequelize.sync()

app.listen0(process.env.PORT, () => {
    console.log(`server is listening on port: ${process.env.PORT}`)
})