const Product = require('../models/product');
const Banner = require('../models/banner');

const resolvers = {
    Query: {
        products: async () => {
            try {
                const products = await Product.find();
                return products;
            } catch (error) {
                throw new Error('Failed to fetch products');
            }
        },

        product: async (_, { id }) => {
            try {
                const product = await Product.findById(id);
                return product;
            } catch (error) {
                throw new Error('Failed to fetch product');
            }
        },

        banners: async () => {
            try {
                const banners = await Banner.find();
                return banners;
            } catch (error) {
                throw new Error('Failed to fetch banners');
            }
        },

        banner: async (_, { id }) => {
            try {
                const banner = await Banner.findById(id);
                return banner;
            } catch (error) {
                throw new Error('Failed to fetch banner');
            }
        },
        GetProducts: async () => {
            try {
                const products = await Product.find();
                return products;
            } catch (error) {
                throw new Error('Failed to fetch products');
            }
        },
    },

    Mutation: {
        createProduct: async (_, { productInput }) => {
            try {
                const product = new Product({
                    title: productInput.title,
                    sku: productInput.sku,
                    price: productInput.price,
                    description: productInput.description,
                    imageUrl: productInput.imageUrl
                });

                const savedProduct = await product.save();
                return savedProduct;
            } catch (error) {
                throw new Error('Failed to create product');
            }
        },

        updateProduct: async (_, { id, productInput }) => {
            try {
                const product = await Product.findByIdAndUpdate(
                    id,
                    {
                        title: productInput.title,
                        sku: productInput.sku,
                        price: productInput.price,
                        description: productInput.description,
                        imageUrl: productInput.imageUrl
                    },
                    { new: true }
                );

                if (!product) {
                    throw new Error('Product not found');
                }

                return product;
            } catch (error) {
                throw new Error('Failed to update product');
            }
        },

        deleteProduct: async (_, { id }) => {
            try {
                const product = await Product.findByIdAndDelete(id);
                if (!product) {
                    throw new Error('Product not found');
                }
                return true;
            } catch (error) {
                throw new Error('Failed to delete product');
            }
        },

        createBanner: async (_, { bannerInput }) => {
            try {
                const banner = new Banner({
                    imageUrl: bannerInput.imageUrl,
                    title: bannerInput.title,
                    description: bannerInput.description,
                    bannerUrl: bannerInput.bannerUrl
                });

                const savedBanner = await banner.save();
                return savedBanner;
            } catch (error) {
                throw new Error('Failed to create banner');
            }
        },

        updateBanner: async (_, { id, bannerInput }) => {
            try {
                const banner = await Banner.findByIdAndUpdate(
                    id,
                    {
                        imageUrl: bannerInput.imageUrl,
                        title: bannerInput.title,
                        description: bannerInput.description,
                        bannerUrl: bannerInput.bannerUrl
                    },
                    { new: true }
                );

                if (!banner) {
                    throw new Error('Banner not found');
                }

                return banner;
            } catch (error) {
                throw new Error('Failed to update banner');
            }
        },

        deleteBanner: async (_, { id }) => {
            try {
                const banner = await Banner.findByIdAndDelete(id);
                if (!banner) {
                    throw new Error('Banner not found');
                }
                return true;
            } catch (error) {
                throw new Error('Failed to delete banner');
            }
        }
    }
};

module.exports = resolvers; 