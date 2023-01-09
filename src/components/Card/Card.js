import React from "react";
import './Card.css';

let isActive = true;

const extendProperty = event => {
    if(isActive) {
        event.currentTarget.classList.add('toggleBoxShadowON');
    }
    else {
        event.currentTarget.classList.remove('toggleBoxShadowON');
    }
    isActive = !isActive;
}


const Card = ({ ipLoopback, nodeName, address, city, comments, contact, invId, latitude, longitude, productType, responsibility, project, prov1, ipAdd1, vid1, prov2, ipAdd2, vid2 }) => {
    return (
        <div className='full-card' onClick={extendProperty}>
            <div className='card'>
                <h3 id="name">{nodeName}</h3>
                <h3 id="location">{address}</h3>
                <h3 id="vid">{`Vid1: ${vid1}`}</h3>
                <h3 id="ipAdd">{`IP1: ${ipAdd1}`}</h3>
                <h3 id="prov">{`Prov1: ${prov1}`}</h3>
            </div>
            <h3 id="info">{`Info: ${comments}`}</h3>
        </div>
    );
}

export default Card;