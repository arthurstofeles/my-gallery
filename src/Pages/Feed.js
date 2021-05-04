import React from 'react';
import Gallery from '../Components/Gallery';
import Info from '../Components/Info';
import Perfil from '../Components/Perfil';

const Feed = () => {
    return(
        <div>
            <Perfil />
            <Info />
            <Gallery />
        </div>
    )
}

export default Feed;