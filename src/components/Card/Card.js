import React from "react";
import './Card.css';
import { database } from '../../database';



const Card = ({database}) => {
    return (
        <div className='card'>
            <h2 id="id">{database.id}</h2>
            <h2 id="name">{database.name}</h2>
            <h2 id="location">{database.location}</h2>
            <h2 id="vid">{database.vid}</h2>
            <h2 id="ipAdd">{database.ipAdd}</h2>
            <h2 id="mask">{database.mask}</h2>
            <h2 id="prov">{database.prov}</h2>
            <h2 id="info">{database.info}</h2>
        </div>
    );
}

export default Card;