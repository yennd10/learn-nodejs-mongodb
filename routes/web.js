const path = require('path');

const express = require('express');

const productController = require('../controllers/productController');
const bannerController = require('../controllers/bannerController');

const router = express.Router();

// controller show list products
router.get('/', productController.getProducts);

// Add
router.get('/add-product', productController.getAddProduct);

router.post('/add-product', productController.postAddProduct);

// Edit
router.get('/edit-product/:productId', productController.getEditProduct);

router.post('/edit-product', productController.postEditProduct);

//Delete
router.post('/delete-product', productController.postDeleteProduct);


// swiper
router.get('/swiper', (req, res) => {
    res.render('swiper', {
        pageTitle: 'swiper',
        path: '/swiper'
    });
});


// controller show list banners
router.get('/banners', bannerController.getBanners);
router.get('/add-banner', bannerController.getAddBanner);

router.post('/add-banner', bannerController.postAddBanner);
module.exports = router;
