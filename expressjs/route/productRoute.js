const express = require('express')
const { addProduct, getAllProduct, getProductById, getProductByCategory, updateProduct, deleteProductByCategory} = require('../controlller/ProductContoller')
const { requireSignin } = require('../controlller/UserController')
const upload = require('../utils/fileUpload')
const { productValidationRules, validate } = require('../validation')
 const router = express.Router()

 router.post('/addproduct',upload.single('product_image'),productValidationRules,validate,requireSignin, addProduct)
 router.get('/products',getAllProduct)
 router.get('/products/:id',getProductById)
 router.get('/getproductbycategory/:category_id',requireSignin,getProductByCategory)
 router.put('/updateproduct/:id',requireSignin,updateProduct)
 router.delete('/deleteproductbycategory/:category_id',requireSignin,deleteProductByCategory)

 module.exports = router