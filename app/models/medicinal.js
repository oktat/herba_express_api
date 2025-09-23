import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Medicinal = sequelize.define('medicinal', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING,  allowNull: false  }
})


sequelize.sync({
    force: false
})

export default Medicinal
