import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Herb = sequelize.define('herb', {
    name: { type: DataTypes.STRING,  allowNull: false  }
})

export default Herb
