const path = require('path');

const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.get('/add-product', productController.getAddProduct);

router.get('/', productController.getProducts);

router.post('/add-product', productController.postAddProduct);

router.get('/edit-product/:productId', productController.getEditProduct);

router.post('/edit-product', productController.postEditProduct);

router.post('/delete-product', productController.postDeleteProduct);

module.exports = router;
