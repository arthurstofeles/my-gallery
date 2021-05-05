import React from 'react';
import Gallery from '../Components/Gallery';
import Info from '../Components/Info';
import Perfil from '../Components/Perfil';
import Footer from '../Components/Footer';

const Feed = () => {
    return(
        <div className="container">
            <Perfil />
            <Info />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Feed;