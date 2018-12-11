const Sequelize = require('sequelize');

const sequelize = new Sequelize('escapeplan', 'postgres', 'Pierce11', {
    host: 'localhost',
    dialect: 'postgres'
});

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