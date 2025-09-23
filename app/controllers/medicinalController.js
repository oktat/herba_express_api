import Medicinal from '../models/medicinal.js'

const MedicinalController = {
    async index(req, res) {
        try {
            await MedicinalController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const medicinals = await Medicinal.findAll()
        res.status(200)
        res.json({
            success: true,
            data: medicinals
        })
    },
    async show(req, res) {
        try {
            await MedicinalController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryShow(req, res) {
        const medicinal = await Medicinal.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: medicinal
        })
    },
    async create(req, res) {
        try {
            await MedicinalController.tryCreate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryCreate(req, res) {
        const medicinal = await Medicinal.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: medicinal
        })
    },
    async update(req, res) {
        try {
            await MedicinalController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Medicinal.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const medicinal = await Medicinal.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: medicinal
        })
    },
    async destroy(req, res) {
        try {
            await MedicinalController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryDestroy(req, res) {
        const medicinal = await Medicinal.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: medicinal
        })
    }
}

export default MedicinalController