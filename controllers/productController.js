const Product = require('../models/product');
const Banner = require('../models/banner');

exports.getAddProduct = (req, res, next) => {
  res.render('ProductForm', {
    pageTitle: 'Add Product',
    path: '/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const sku = req.body.sku;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    sku: sku.toUpperCase(),
    price: price,
    description: description,
    imageUrl: imageUrl
  });
  product
    .save()
    .then(result => {
      // console.log('Created Product');
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (editMode !== 'true') {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(product => {
      if (!product) {
        return res.redirect('/');
      }
      res.render('ProductForm', {
        pageTitle: 'Edit Product',
        path: '/edit-product',
        editing: editMode,
        product: product
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedSku = req.body.sku;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Product.findById(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.sku = updatedSku.toUpperCase();
      product.price = updatedPrice;
      product.imageUrl = updatedImageUrl;
      product.description = updatedDesc;
      return product.save();
    })
    .then(result => {
      // console.log('Updated product!');
      res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getProductList = (req, res, next) => {
  // Fetch both products and banners
  Promise.all([
    Product.find(),
    Banner.find()
  ])
    .then(([products, banners]) => {
      res.render('ProductList', {
        prods: products, // render prods list to home
        pageTitle: 'Product List',
        path: '/',
        banners: banners // Add banners from database
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndDelete(prodId)
    .then(() => {
      // console.log('Delete product');
      res.redirect('/');
    })
    .catch(err => console.log(err));
};