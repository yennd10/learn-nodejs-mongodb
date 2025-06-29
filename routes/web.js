const path = require('path');

const express = require('express');

const productController = require('../controllers/productController');
const bannerController = require('../controllers/bannerController');

const ProductService = require('../graphql-m2/product-service');

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

// API endpoint to get Venia products
router.get('/api/venia/products', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        const productService = new ProductService();
        const products = await productService.getProducts(pageSize, page);

        res.json({
            success: true,
            products: products
        });
    } catch (error) {
        console.error('Error fetching Venia products:', error);
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to fetch products from Venia'
        });
    }
});

module.exports = router;
