import Herb from './herb.js'
import Medicinal from './medicinal.js'

const db = {}

db.Herb = Herb
db.Medicinal = Medicinal

db.Herb.belongsToMany(db.Medicinal, { through: 'herb_med' })
db.Medicinal.belongsToMany(db.Herb, { through: 'herb_med' })

export default db
