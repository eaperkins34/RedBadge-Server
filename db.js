const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(
        function() {
            console.log('connected to escapeplan');
        },
        function(err) {
            console.log(error)
        }
    )


module.exports = sequelize;