import React, { useEffect, useRef, useState } from 'react';

export default function ContentSection() {
    const contentSectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (contentSectionRef.current) {
            observer.observe(contentSectionRef.current);
        }

        return () => {
            if (contentSectionRef.current) {
                observer.unobserve(contentSectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            document.querySelector('.box').classList.add('content_big_text_in_view');
            document.querySelector('.content_img').classList.add('img_appear');
        }
    }, [isInView]);


    return (
        <div ref={contentSectionRef} className="content_section">
            <div className="content_text_box">
                <span className="content_title">ABOUT OUR COMPANY</span>
                <div className={'box'}>
                    <span className="content_big_text">
                    We provide professional solutions to deliver safe & efficient project
                </span>
                </div>

                <span className="content_text">
                    This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.
                </span>

                <button className="get_quote content_btn black_hovered_btn flex_center button">
                    <a href="/quote">GET A QUOTE</a>
                    <svg className="get_quote_svg_white" data-bbox="19.5 21.8 161 156.4" viewBox="0 0 200 200" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                        <g>
                            <path d="M180.5 57.7v120.5H64.8v-19.3H147L19.5 35.7l13.4-13.9 128.2 124V57.7h19.4z"></path>
                        </g>
                    </svg>
                </button>
            </div>
            <div className="content_img_box">
                <img className={'content_img'} src="/images/home_content_img.webp" alt="home"/>
            </div>
        </div>
    );
}
