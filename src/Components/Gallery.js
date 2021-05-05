import React from 'react';
import Photo1 from '../Images/photo1.png';
import Photo2 from '../Images/photo2.png';
import Photo3 from '../Images/photo3.png';
import Photo4 from '../Images/photo4.png';
import Photo5 from '../Images/photo5.png';
import Photo6 from '../Images/photo6.png';

const Gallery = () => {
    return(
        <div>
            <div>
                <img src={Photo1} alt="First Photo" />
                <img src={Photo2} alt="Second Photo" />
                <img src={Photo3} alt="First Photo" />
                <img src={Photo4} alt="First Photo" />
                <img src={Photo5} alt="First Photo" />
                <img src={Photo6} alt="First Photo" />
            </div>
        </div>
    )
}

export default Gallery;