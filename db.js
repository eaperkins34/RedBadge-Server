const Sequelize = require('sequelize');

const sequelize = new Sequelize('escapeplan', 'postgres', 'emaleigh34', {
    host: 'localhost',
    dialect: 'postgres'
});

const Theme = sequelize.import('./models/theme.js');
const Business = sequelize.import('./models/business.js');
const User = require('./models/user')

Theme.belongsTo(Business);
Business.hasMany(Theme, {as: 'Themes'});

sequelize.authenticate()
    .then(
        function() {
            console.log('connected to escapeplan');
        },
        function(err) {
            console.log(err)
        }
    )


module.exports = sequelize;