require('dotenv').config();
const { PORT } = process.env;


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db');

// require('./models')
sequelize.sync();
app.use(bodyParser.json())
app.use(require('./middleware/headers'));

app.use('/business', require('./controllers/business-controller'))
app.use('/theme', require('./controllers/theme-controller'))



app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
})