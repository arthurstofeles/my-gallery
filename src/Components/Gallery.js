import React from 'react';
import Photo1 from '../Images/photo1.png';
import Photo2 from '../Images/photo2.png';
import Photo3 from '../Images/photo3.png';
import Photo4 from '../Images/photo4.png';
import Photo5 from '../Images/photo5.png';
import Photo6 from '../Images/photo6.png';

const Gallery = () => {
    return (
        <div className="grid-container">
            <img className="photo1" src={Photo1} alt="A coffe table" />
            <img className="photo2" src={Photo2} alt="A sofa" />
            <img className="photo3" src={Photo3} alt="A bathtub" />
            <img className="photo4" src={Photo4} alt="A lamp" />
            <img className="photo5" src={Photo5} alt="A plant" />
            <img className="photo6" src={Photo6} alt="A table" />
        </div>
    )
}

export default Gallery;