import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BANNERS } from '../graphql/queries';
import LoadingSpinner from './LoadingSpinner';
import './BannerSlider.css';

const BannerSlider = () => {
    const { loading, data, error } = useQuery(GET_BANNERS);

    const banners = data?.banners || [];

    if (loading) {
        return (
            <div className="banner-slider">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="banner-slider">
                <div className="error-message">
                    <p>Failed to load banners</p>
                </div>
            </div>
        );
    }

    if (banners.length === 0) {
        return (
            <div className="banner-slider">
                <div className="no-banners">
                    <p>No banners available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="banner-slider">
            <div className="banner-container">
                {banners.map((banner) => (
                    <div key={banner._id} className="banner-item">
                        <img
                            src={banner.imageUrl}
                            alt={banner.title}
                            className="banner-image"
                        />
                        <div className="banner-content">
                            <h2>{banner.title}</h2>
                            <p>{banner.description}</p>
                            {banner.bannerUrl && (
                                <a href={banner.bannerUrl} className="banner-link">
                                    Learn More
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BannerSlider; 