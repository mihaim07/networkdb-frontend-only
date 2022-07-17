import React from "react";
import './Card.css';



const Card = ({ id, name, location, vid, ipAdd, mask, prov, info }) => {
    return (
        <div className='card'>
            <h2 id="id">{id}</h2>
            <h2 id="name">{name}</h2>
            <h2 id="location">{location}</h2>
            <h2 id="vid">{`Vid: ${vid}`}</h2>
            <h2 id="ipAdd">{`IP: ${ipAdd}`}</h2>
            <h2 id="mask">{`Mask: ${mask}`}</h2>
            <h2 id="prov">{`Prov: ${prov}`}</h2>
            <h2 id="info">{`Info: ${info}`}</h2>
        </div>
    );
}

export default Card;