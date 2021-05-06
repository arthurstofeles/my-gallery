import React from 'react';
import PhotoPefil from "../Images/profilePhoto.png"

const Perfil = () => {
    return(
        <header>
            <img className="photo-perfil" src={PhotoPefil} alt="The main profile" />
            <h1>Rodney Cotton</h1>
            <h2>Helsinki, Finland</h2>
        </header>
    )
}

export default Perfil;