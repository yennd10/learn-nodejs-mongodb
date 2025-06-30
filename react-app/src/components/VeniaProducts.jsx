import React, { useState, useEffect } from 'react';
import './VeniaProducts.css';
import LoadingSpinner from './LoadingSpinner';

const VeniaProducts = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchProducts = async (page = 1) => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/api/venia/products?page=${page}&pageSize=9`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                setProducts(data.products.items || []);
                setTotalPages(data.products.page_info?.total_pages || 1);
                setCurrentPage(page);
            } else {
                throw new Error(data.message || 'Failed to fetch products');
            }
        } catch (err) {
            console.error('Error fetching Venia products:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:8080/api/venia/categories`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                setCategories(data.categories.items || []);
            } else {
                throw new Error(data.message || 'Failed to fetch products');
            }
        } catch (err) {
            console.error('Error fetching Venia products:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            fetchProducts(newPage);
        }
    };

    const formatPrice = (priceRange) => {
        if (!priceRange?.minimum_price?.final_price) {
            return 'Price not available';
        }
        const { value, currency } = priceRange.minimum_price.final_price;
        return `${currency} ${parseFloat(value).toFixed(2)}`;
    };

    const getPlainText = (html) => {
        if (!html) return '';
        return html.replace(/<[^>]*>/g, '');
    };

    if (loading) {
        return (
            <div className="venia-products-container">
                <h2>Venia Products</h2>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="venia-products-container">
                <h2>Venia Products</h2>
                <div className="error-message">
                    <h3>Error Loading Venia Products</h3>
                    <p>{error}</p>
                    <button onClick={() => fetchProducts()} className="retry-button">
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="venia-products-container">
            {/*Categories:{JSON.stringify(categories)}*/}

            <h2>Venia Products</h2>

            {products.length === 0 ? (
                <div className="no-products">
                    <p>No products available from Venia</p>
                </div>
            ) : (
                <>
                    <div className="venia-products-grid">
                        {products.map((product) => (
                            <div key={product.id} className="venia-product-card">
                                <div className="venia-product-image">
                                    <img
                                        src={product.image?.url || 'https://via.placeholder.com/300x200?text=No+Image'}
                                        alt={getPlainText(product.name)}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                        }}
                                    />
                                </div>
                                <div className="venia-product-info">
                                    <h3 className="venia-product-name"
                                        dangerouslySetInnerHTML={{ __html: product.name }}></h3>
                                    <div className="venia-product-sku">
                                        <span className="sku-label">SKU:</span>
                                        <span className="sku-value">{product.sku}</span>
                                    </div>
                                    {product.short_description?.html && (
                                        <p className="venia-product-description">
                                            {getPlainText(product.short_description.html).substring(0, 100)}...
                                        </p>
                                    )}
                                    <div className="venia-product-price">
                                        <span className="price-amount">{formatPrice(product.price_range)}</span>
                                    </div>
                                    <div className="venia-product-stock">
                                        <span className={`stock-status ${product.stock_status?.toLowerCase()}`}>
                                            {product.stock_status || 'Unknown'}
                                        </span>
                                    </div>
                                    {product.categories && product.categories.length > 0 && (
                                        <div className="venia-product-categories">
                                            <span className="categories-label">Categories:</span>
                                            <div className="categories-list">
                                                {product.categories.slice(0, 2).map((category) => (
                                                    <span key={category.id} className="category-tag">
                                                        {category.name}
                                                    </span>
                                                ))}
                                                {product.categories.length > 2 && (
                                                    <span className="category-tag more">
                                                        +{product.categories.length - 2} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    <button className="venia-add-to-cart-btn">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="venia-pagination">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="pagination-btn"
                            >
                                Previous
                            </button>
                            <span className="page-info">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="pagination-btn"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default VeniaProducts; 