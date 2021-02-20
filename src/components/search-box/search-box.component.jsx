import React from 'react';
import './search-box.styles.css';
export const SearchBox = ({placeHolder, handleChange}) => (
    <div className='search-container'>
    <input
          type="search" className='search'
          placeholder=""
            onChange={handleChange}
    />
                <label>{placeHolder}</label>
            <span className="focus-border">
            	<i></i>
            </span>
        </div>
)