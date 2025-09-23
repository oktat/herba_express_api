import Herb from '../models/herb.js'
import Medicinal from '../models/medicinal.js'

const HerbmedController = {
  async getAllHerbmed(req, res) {
    const herbmeds = await Herb.findAll({
      attributes: ['id', 'name'],
      include: {
        model: Medicinal,
        attributes: ['id', 'name'],
        through: {
          attributes: []
        }
      }
    })
    res.status(200)
    res.json({
      success: true,
      data: herbmeds
    })
  },
  async createHerbmed(req, res) {
    const herb = await Herb.findByPk(req.params.herbId)
    const medicinal = await Medicinal.findByPk(req.params.medicinalId)
    if(herb && medicinal) {
      await herb.addMedicinal(medicinal, { through: { usage: req.body.usage } })
      res.status(201)
      res.json({
        success: true,
        message: 'The relation is created successfully!'
      })
    } else {
      res.status(404)
      res.json({
        success: false,
        message: 'Error! Herb or Medicinal not found!'
      })
    }
  },
  async deleteHerbmed(req, res) {
    const herb = await Herb.findByPk(req.params.herbId)
    const medicinal = await Medicinal.findByPk(req.params.medicinalId)
    if(herb && medicinal) {
      await herb.removeMedicinal(medicinal)
      res.status(200)
      res.json({
        success: true,
        message: 'The relation is deleted successfully!'
      })
    } else {
      res.status(404)
      res.json({
        success: false,
        message: 'Error! Herb or Medicinal not found!'
      })
    }
  }
}

export default HerbmedController
