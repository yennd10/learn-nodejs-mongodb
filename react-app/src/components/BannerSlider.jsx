import React from 'react';
import { useQuery } from '@apollo/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { GET_BANNERS } from '../graphql/queries';
import LoadingSpinner from './LoadingSpinner';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
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
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                effect="fade"
                fadeEffect={{
                    crossFade: true
                }}
                loop={banners.length > 1}
                className="banner-swiper"
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner._id} className="banner-slide">
                        <div className="banner-item">
                            <img
                                src={banner.imageUrl}
                                alt={banner.title}
                                className="banner-image"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/1200x400?text=Banner+Image';
                                }}
                            />
                            <div className="banner-content">
                                <div className="banner-text">
                                    <h2 className="banner-title">{banner.title}</h2>
                                    <p className="banner-description">{banner.description}</p>
                                    {/* {banner.bannerUrl && (
                                        <a href={banner.bannerUrl} className="banner-link" target="_blank" rel="noopener noreferrer">
                                            Shop Now
                                        </a>
                                    )} */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <div className="swiper-button-prev banner-nav-btn"></div>
                <div className="swiper-button-next banner-nav-btn"></div>

                {/* Custom Pagination */}
                <div className="swiper-pagination banner-pagination"></div>
            </Swiper>
        </div>
    );
};

export default BannerSlider; 