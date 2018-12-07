module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unque: true
        },
        password: {
            type: DataTypes.STRING,
            allownull: false,
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        business: DataTypes.ENUM('Escape This Live Indianapolis', 'Breakout Games-North', 'Breakout Games-South', 'Escape the Room', 'Escape INDY', 'The Escape Room - Indianapolis', 'The Escape Room - Fishers', 'Twisted Room Escapes'),
        phone: DataTypes.STRING,
        role: {
            type: DataTypes.ENUM('user', 'business', 'admin'),
            defaultValue: 'user'
        }
    })
}