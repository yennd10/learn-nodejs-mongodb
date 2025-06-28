const path = require('path');

const express = require('express');

const productController = require('../controllers/productController');
const bannerController = require('../controllers/bannerController');

const router = express.Router();


// get product list
router.get('/', productController.getProductList);

// Add
router.get('/add-product', productController.getAddProduct);

router.post('/add-product', productController.postAddProduct);

// Edit
router.get('/edit-product/:productId', productController.getEditProduct);

router.post('/edit-product', productController.postEditProduct);

//Delete
router.post('/delete-product', productController.postDeleteProduct);


// swiper
// router.get('/swiper', (req, res) => {
//     res.render('swiper', {
//         pageTitle: 'swiper',
//         path: '/swiper'
//     });
// });


// Banner Management Routes
// controller show list banners
router.get('/banner-list', bannerController.getBannerList);
router.get('/add-banner', bannerController.getAddBanner);
router.post('/add-banner', bannerController.postAddBanner);

// Edit Banner
router.get('/edit-banner/:bannerId', bannerController.getEditBanner);
router.post('/edit-banner', bannerController.postEditBanner);

// Delete Banner
router.post('/delete-banner', bannerController.postDeleteBanner);

module.exports = router;
