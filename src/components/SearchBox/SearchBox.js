import React from "react";
import './SearchBox.css';



const SearchBox = ({ searchChange }) => {
   
    return (
        <div className='searchBox'>
            <input className="input" type={'text'} placeholder={'Search...'} onChange={searchChange}/>
        </div>
    );
}

export default SearchBox;