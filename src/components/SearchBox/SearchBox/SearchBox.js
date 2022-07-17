import React from "react";
import './SearchBox.css';



const SearchBox = ({ id, name, location, vid, ipAdd, mask, prov, info }) => {
    return (
        <div className='SearchBox'>
            <h2 id="id">{id}</h2>
            <h2 id="name">{name}</h2>
            <h2 id="location">{location}</h2>
            <h2 id="vid">{vid}</h2>
            <h2 id="ipAdd">{ipAdd}</h2>
            <h2 id="mask">{mask}</h2>
            <h2 id="prov">{prov}</h2>
            <h2 id="info">{info}</h2>
        </div>
    );
}

export default SearchBox;