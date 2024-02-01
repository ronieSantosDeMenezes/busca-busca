const router = require('express').Router()
const productService = require('../service/productService')


router.post('/product', productService.createProduct)

router.get('/product/:id?', productService.getProductById)

router.put('/product/:id', productService.updateProduct)

router.delete('/product/:id', productService.deleteProduct)


module.exports = router