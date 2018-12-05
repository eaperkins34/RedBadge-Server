module.exports = (sequelize, DataTypes) => {
    return sequelize.define('theme', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        business: {
            type: DataTypes.ENUM('Escape This Live Indianapolis', 'Breakout Games-North', 'Breakout Games-South', 'Escape the Room', 'Escape INDY', 'The Escape Room - Indianapolis', 'The Escape Room - Fishers', 'Twisted Room Escapes'),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        }, 
        minimum: DataTypes.INTEGER,
        maximum: DataTypes.INTEGER,
        length: {
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        difficulty: {
            type: DataTypes.STRING,
            defaultValue: "not available"
        }
    })
}