const express = require('express');
const productController = require('../controllers/productController');
const bannerController = require('../controllers/bannerController');
const ProductService = require('../graphql-m2/product-service');

const router = express.Router();


// products 
router.get('/', productController.getProductList);
router.get('/add-product', productController.getAddProduct);
router.post('/add-product', productController.postAddProduct);
router.get('/edit-product/:productId', productController.getEditProduct);
router.post('/edit-product', productController.postEditProduct);
router.post('/delete-product', productController.postDeleteProduct);

// Banners
router.get('/banner-list', bannerController.getBannerList);
router.get('/add-banner', bannerController.getAddBanner);
router.post('/add-banner', bannerController.postAddBanner);
router.get('/edit-banner/:bannerId', bannerController.getEditBanner);
router.post('/edit-banner', bannerController.postEditBanner);
router.post('/delete-banner', bannerController.postDeleteBanner);

// api endpoint cho phép client nhận products từ venia
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
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to fetch products'
        });
    }
});


router.get('/api/venia/categories', async (req, res) => {
    try {
        const productService = new ProductService();
        const categories = await productService.getCategories();
        // send categories to client
        res.json({
            success: true,
            categories: categories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Failed to fetch categories'
        });
    }
});

module.exports = router;
