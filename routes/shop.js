const express = require('express');
const path = require('path');


const shopController = require('../controllers/shop');
const router = express.Router();
router.get('/', shopController.getShopIndex);
router.get('/products',shopController.getProducts);
router.get('/products/:productId',shopController.getMyProductDetails);
router.get('/cart',shopController.getMyCart);
router.get('/checkout',shopController.getCheckout);
router.get('/orders',shopController.getMyOrders);

module.exports = router;
