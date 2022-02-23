import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./sliders.css";

import { FreeMode, Navigation, Thumbs } from "swiper";

import img from "../../assets/img/products/one-product/product-1.png";
import product from "../../assets/img/products/one-product/product.png";
import chevronTop from '../../assets/img/chevron-top.png';
import chevronBottom from '../../assets/img/chevron-bottom.png';

const Sliders = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (

        <div className='product-slider' data-test-id="product-slider">
            <Swiper
                style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className=".product-slider-first"
            >
                <SwiperSlide>
                    <img src={product} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={product} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={product} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={product} alt="img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={product} alt="img" />
                </SwiperSlide>
            </Swiper>
            <div className="product-slider-second">
                <div className="button-slider">
                    <button className="sliderTop-btn"><img src={chevronTop} alt="img" /></button>
                    <button className="sliderBottom-btn"><img src={chevronBottom} alt="img" /></button>
                </div>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={30}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className=".product-slider-second"

                    navigation={{
                        nextEl: '.sliderBottom-btn', 
                        prevEl: '.sliderTop-btn',
                    }}
                    direction={'vertical'}
                    style={{height: '560px'}}
                >
                    <SwiperSlide>
                        <img src={img} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img} alt="img" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export {Sliders}