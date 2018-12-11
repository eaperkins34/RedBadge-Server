require('dotenv').config();
const { PORT } = process.env;


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db');

// require('./models')

app.use('/business', require('./controllers/business-controller'))
app.use('/theme', require('./controllers/theme-controller'))

app.use(bodyParser.json())


app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
})