import Herb from '../models/herb.js'

const HerbController = {
    async index(req, res) {
        try {
            await HerbController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryIndex(req, res) {
        const herbs = await Herb.findAll()
        res.status(200)
        res.json({
            success: true,
            data: herbs
        })
    },
    async show(req, res) {
        try {
            await HerbController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryShow(req, res) {
        const herb = await Herb.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: herb
        })
    },
    async create(req, res) {
        try {
            await HerbController.tryCreate(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryCreate(req, res) {
        const herb = await Herb.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: herb
        })
    },
    async update(req, res) {
        try {
            await HerbController.tryUpdate(req, res)
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
        const recordNumber = await Herb.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const herb = await Herb.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: herb
        })
    },
    async destroy(req, res) {
        try {
            await HerbController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!'
            })
        }
    },
    async tryDestroy(req, res) {
        const herb = await Herb.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: herb
        })
    }
}

export default HerbController
