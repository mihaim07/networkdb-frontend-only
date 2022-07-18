import React from "react";
import './SearchBox.css';



const SearchBox = () => {
    return (
        <div className='searchBox'>
            <input className="input" type={'text'} placeholder={'Search...'} />
        </div>
    );
}

export default SearchBox;