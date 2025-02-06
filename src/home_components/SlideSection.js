import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation, Mousewheel} from 'swiper/modules';
import {Link} from "react-router-dom";


const MySwiperComponent = () => {
    return (
        <div className={'slide_container'}>
            <div className={'title_and_button_box'}>
                <span className={'slide_title'}>FEATURED REMODELS</span>
                <span className={'slide_big_text'}>We Create Spaces You’ll Love</span>
                <button className={'get_quote content_btn black_hovered_btn flex_center button'}>
                    <a href="/projects">ALL PROJECTS</a>
                    <svg className={'get_quote_svg_white'} data-bbox="19.5 21.8 161 156.4" viewBox="0 0 200 200"
                         height="200" width="200"
                         xmlns="http://www.w3.org/2000/svg" data-type="shape">
                        <g>
                            <path d="M180.5 57.7v120.5H64.8v-19.3H147L19.5 35.7l13.4-13.9 128.2 124V57.7h19.4z"></path>
                        </g>
                    </svg>
                </button>
            </div>
            <Swiper
                navigation={{
                    nextEl: '.custom-next', // Assign custom class for next button
                    prevEl: '.custom-prev', // Assign custom class for next button

                }}
                modules={[Navigation, Mousewheel]}
                // allowTouchMove={true}
                // mousewheel={true}
                // direction="horizontal"
                slidesPerView={'auto'}
                className="mySwiper">
                <SwiperSlide width={'48.541vw'}>
                    <Link to="/projects">
                        <img src="/images/slide_img1.webp" alt="" className={'slide_img'}/>
                    <div className={'layer2'}></div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide width={'48.541vw'}>
                    <Link to="/projects">
                    <img src="/images/slide_img2.webp" alt="slide_img"/>
                    <div className={'layer2'}></div>
                    </Link>
                </SwiperSlide>


                <a href="/projects">

                    <SwiperSlide width={'48.541vw'}>
                        <Link to="/projects">
                        <img src="/images/slide_img3.webp" alt="slide_img"/>
                        <div className={'layer2'}></div>
                        </Link>
                    </SwiperSlide>

                </a>
                <SwiperSlide width={'48.541vw'}>
                    <Link to="/projects">
                    <img src="/images/slide_img4.webp" alt="slide_img"/>
                    <div className={'layer2'}></div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide width={'48.541vw'}>
                    <Link to="/projects">
                    <img src="/images/slide_img5.webp" alt="slide_img"/>
                    <div className={'layer2'}></div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide width={'48.541vw'}>
                    <Link to="/projects">
                    <img src="/images/slide_img6.webp" alt="slide_img"/>
                    <div className={'layer2'}></div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide width={'48.541vw'}>
                    <Link to="/projects">
                    <img src="/images/slide_img7.webp" alt="slide_img"/>
                    <div className={'layer2'}></div>
                    </Link>
                </SwiperSlide>

                <div className={'nav_container'}>
                    <svg
                        className={'custom-prev'}
                        width={'39px'}
                        height={'25px'}
                        viewBox="0 0 39 25"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g stroke="none" strokeWidth="1" fillRule="evenodd">
                            <g transform="translate(-29.000000, -36.000000)" fillRule="nonzero">
                                <path
                                    d="M29,48.2400242 C29,47.3087892 29.6817196,46.6578788 30.6657131,46.6578788 L62.0721815,46.6578788 L53.6034603,38.6027842 C52.9919732,38.0244263 52.9745394,37.0965804 53.5626533,36.4993057 L53.6196503,36.4424086 C54.2232252,35.8695838 55.2162345,35.8487051 55.8566495,36.4049822 L66.7354947,46.6987178 C66.8997789,46.8532785 67.0362567,47.0299812 67.1410943,47.2233734 C67.6421069,47.9137524 67.5952684,48.7577348 67.0654839,49.3382112 L66.9183084,49.529704 C66.8745903,49.5829565 66.834409,49.6278886 66.7923536,49.6712745 L55.84922,60.0371144 C55.2232594,60.6516206 54.1974244,60.6696143 53.554893,60.0838114 C52.9168128,59.5020667 52.8980482,58.5443858 53.5126939,57.940867 L53.5761731,57.877497 L62.0800244,49.8549119 L30.6657131,49.8549119 C29.6912419,49.8549119 29,49.1805348 29,48.2400242 Z"/>
                            </g>
                        </g>
                    </svg>
                    <svg
                        className="custom-next"
                        width="39px"
                        height="25px"
                        viewBox="0 0 39 25"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fillRule="evenodd">
                            <g transform="translate(-29, -36)" fillRule="nonzero">
                                <path
                                    d="M29,48.24 C29,47.31 29.68,46.66 30.67,46.66 L62.07,46.66 L53.6,38.6 C52.99,38.02 52.97,37.1 53.56,36.5 L53.62,36.44 C54.22,35.87 55.22,35.85 55.86,36.4 L66.74,46.7 C66.9,46.85 67.04,47.03 67.14,47.22 C67.64,47.91 67.6,48.76 67.07,49.34 L66.92,49.53 C66.87,49.58 66.83,49.63 66.79,49.67 L55.85,60.04 C55.22,60.65 54.2,60.67 53.55,60.08 C52.92,59.5 52.9,58.54 53.51,57.94 L53.58,57.88 L62.08,49.85 L30.67,49.85 C29.69,49.85 29,49.18 29,48.24 Z"
                                />
                            </g>
                        </g>
                    </svg>
                </div>
            </Swiper>
        </div>
    );
};

export default MySwiperComponent;
