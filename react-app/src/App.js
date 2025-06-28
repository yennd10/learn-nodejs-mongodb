import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import './App.css';
import Product from './components/Product';
import LoadingSpinner from './components/LoadingSpinner';
import BannerSlider from './components/BannerSlider';
import ProductForm from './components/ProductForm';
import { GET_PRODUCTS } from './graphql/queries';

function App() {
    const [error, setError] = useState(null);
    const [showProductForm, setShowProductForm] = useState(false);

    const { loading, data, error: queryError, refetch } = useQuery(GET_PRODUCTS, {
        onError: (error) => {
            console.error('GraphQL Error Details:', error);
            console.error('Network Error:', error.networkError);
            console.error('GraphQL Errors:', error.graphQLErrors);
            setError(`GraphQL Error: ${error.message}`);
        },
        fetchPolicy: 'cache-and-network'
    });

    const products = data?.products || [];

    if (loading) {
        return (
            <div className="app">
                <header className="app-header">
                    <h1>Products Store</h1>
                </header>
                <main className="app-main">
                    <LoadingSpinner />
                </main>
            </div>
        );
    }

    if (error || queryError) {
        return (
            <div className="app">
                <header className="app-header">
                    <h1>Products Store</h1>
                </header>
                <main className="app-main">
                    <div className="error-message">
                        <h3>Error Loading Products</h3>
                        <p>{error || queryError?.message}</p>
                        <div className="error-details">
                            <p><strong>Debug Info:</strong></p>
                            <p>• Check if GraphQL server is running on port 3000</p>
                            <p>• Check browser console for network errors</p>
                            <p>• Verify CORS configuration</p>
                        </div>
                        <button onClick={() => refetch()} className="retry-button">
                            Try Again
                        </button>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="app">
            <header className="app-header">
                <h1>Products Store</h1>
                <div className="header-actions">
                    <p>Total Products: {products.length}</p>
                    <button
                        onClick={() => setShowProductForm(true)}
                        className="add-product-button"
                    >
                        Add Product
                    </button>
                </div>
            </header>
            <main className="app-main">
                <BannerSlider />
                {products.length === 0 ? (
                    <div className="no-products">
                        <p>No products available</p>
                        <button
                            onClick={() => setShowProductForm(true)}
                            className="add-first-product-button"
                        >
                            Add Your First Product
                        </button>
                    </div>
                ) : (
                    <div className="products-grid">
                        {products.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </main>

            {showProductForm && (
                <ProductForm onClose={() => setShowProductForm(false)} />
            )}
        </div>
    );
}

export default App; 