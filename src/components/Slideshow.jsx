import React, { useState } from 'react';
import '../css/Slideshow.css';

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    
    const bannerImages = [
        `${process.env.PUBLIC_URL}/images/banner1.jpg`,
        `${process.env.PUBLIC_URL}/images/banner2.jpg`,
        `${process.env.PUBLIC_URL}/images/banner3.jpg`,
        `${process.env.PUBLIC_URL}/images/banner4.jpg`,
        `${process.env.PUBLIC_URL}/images/banner5.jpg`,
    ];
    
    const slideForward = () => {
        setSlideIndex(slideIndex < bannerImages.length - 1 ? slideIndex + 1 : 0);
    };
    
    const slideBackward = () => {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : bannerImages.length - 1);
    };
    
    return (
        <div className="banner-slideshow">
            <div
                className="banner"
                style={{ backgroundImage: `url(${bannerImages[slideIndex]})`}}
            ></div>
            <button className="arrow" onClick={slideForward} id="right-arrow">&gt;</button>
            <button className="arrow" onClick={slideBackward} id="left-arrow">&lt;</button>
        </div>
    );
};

export default Slideshow;