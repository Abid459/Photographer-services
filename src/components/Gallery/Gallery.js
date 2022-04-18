import React from 'react';
import { Carousel } from '3d-react-carousal';


const Gallery = () => {
    let slides = [
        <img src="./img/slider1.jpg" alt="1" />,
        <img src="./img/slider2.jpg" alt="2" />,
        <img src="./img/slider3.jpg" alt="3" />,
        <img src="./img/slider4.jpg" alt="4" />,
        <img src="./img/slider5.jpg" alt="5" />,
        <img src="./img/slider6.jpg" alt="6" />,
        <img src="./img/slider7.jpg" alt="7" />,
        ];
    return (
        <div className='gallery-container'>
            <div className="gallery-info">
                <h4>Gallery</h4>
                <p>The view around the world.</p>

            </div>
            <div className="gallery">
                <Carousel slides={slides} autoplay={true} interval={5000} />
            </div>
        </div>
    );
};

export default Gallery;