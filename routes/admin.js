const express=require('express');

const router=express.Router();

const path=require('path')

const adminController=require('../controllers/admin');
const { route } = require('./shop');
router.get('/addproducts',adminController.getAddProduct);
router.post('/addproducts', adminController.postAddProduct);
//get-/products
router.get('/admin-product',adminController.getAdminProducts);
router.get('/edit-product/:productId',adminController.getEditMyProduct);
router.post('/edit-product',adminController.saveModifedProduct);
router.post('/remove-product',adminController.removeProduct);
module.exports=router;
