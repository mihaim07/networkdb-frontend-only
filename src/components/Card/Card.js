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


const Card = ({ id, name, location, vid, ipAdd, mask, prov, info }) => {
    return (
        <div className='full-card' onClick={extendProperty}>
            <div className='card'>
                <h2 id="id">{id}</h2>
                <h2 id="name">{name}</h2>
                <h2 id="location">{location}</h2>
                <h2 id="vid">{`Vid: ${vid}`}</h2>
                <h2 id="ipAdd">{`IP: ${ipAdd}`}</h2>
                <h2 id="mask">{`Mask: ${mask}`}</h2>
                <h2 id="prov">{`Prov: ${prov}`}</h2>
            </div>
            <h2 id="info">{`Info: ${info}`}</h2>
        </div>
    );
}

export default Card;