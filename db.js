const Sequelize = require('sequelize');

const sequelize = new Sequelize('escapeplan', 'postgres', 'Pierce11', {
    host: 'localhost',
    dialect: 'postgres'
});

const Theme = sequelize.import('./models/theme.js');
const Business = sequelize.import('./models/business.js');
const User = sequelize.import('./models/user')

Theme.belongsTo(Business);
Business.hasMany(Theme, {as: 'Theme_of_Room'});

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