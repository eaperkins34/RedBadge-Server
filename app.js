require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db');
//dave added this delete later

// sequelize.sync({force: true});
sequelize.sync()

app.use(bodyParser.json())
app.use(require ('./middleware/headers'))

require('./models')

app.use('/business', require('./controllers/business-controller'))
app.use('/theme', require('./controllers/theme-controller'))
app.use('/user', require('./controllers/user-controller'))



app.listen(process.env.PORT, () => {
    console.log(`server is listening on port: ${process.env.PORT}`)
})