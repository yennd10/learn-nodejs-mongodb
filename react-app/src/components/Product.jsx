import React from 'react';
import { renderHTML, getPlainText, containsHTML } from '../utils/htmlUtils';
import './Product.css';

const Product = ({ product }) => {
    const { title, sku, price, description, imageUrl } = product;

    return (
        <div className="product-card">
            <div className="product-image">
                <img
                    src={imageUrl}
                    alt={getPlainText(title)}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                    }}
                />
            </div>
            <div className="product-info">
                <div className="product-title" dangerouslySetInnerHTML={renderHTML(title)}></div>
                <div className="product-sku">
                    <span className="sku-label">SKU:</span>
                    <span className="sku-value">{sku}</span>
                </div>
                <p className="product-description">
                    {description && description.length > 100
                        ? `${description.substring(0, 100)}...`
                        : description}
                </p>
                <div className="product-price">
                    <span className="price-amount">${price}</span>
                </div>
                <button className="add-to-cart-btn">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product; 