const express = require ('express')
const router = express.Router()

const brandController = require('../controllers/brand_controller')

router.post('/addbrand',brandController.addBrand)
router.get('/getallbrand',brandController.getAllBrand)
router.get('/getabrandby/:id',brandController.getBrandById)
router.put('/updatebrand/:id',brandController.updateBrand)
router.delete('/deletebrand/:id',brandController.deleteBrand)



module.exports = router