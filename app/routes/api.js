import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middlewares/authjwt.js';
import HerbController from '../controllers/herbController.js';
import MedicinalController from '../controllers/medicinalController.js';
import HerbmedController from '../controllers/herbmedController.js';

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)

router.get('/herbs', HerbController.index)
router.get('/herbs/:id', HerbController.show)
router.post('/herbs', HerbController.create)
router.put('/herbs/:id', HerbController.update)
router.delete('/herbs/:id', HerbController.destroy)

router.get('/medicinals', MedicinalController.index)
router.get('/medicinals/:id', MedicinalController.show)
router.post('/medicinals', MedicinalController.create)
router.put('/medicinals/:id', MedicinalController.update)
router.delete('/medicinals/:id', MedicinalController.destroy)

router.get('/herbmeds', HerbmedController.getAllHerbmed)
router.post('/herbmeds/:herbId/:medicinalId', HerbmedController.createHerbmed)
router.delete('/herbmeds/:herbId/:medicinalId', HerbmedController.deleteHerbmed)

export default router
