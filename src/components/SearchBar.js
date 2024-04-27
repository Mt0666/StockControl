import React from "react";
import { FaSearch } from "react-icons/fa";
import { Navigate, Link } from 'react-router-dom';
import "../style/searchBar.css"


const SearchBar = ({onSearch}) => {
    return  (
        <div>
            <div className="search-bar">
                <input className="search-bar search-bar-label" onChange={(e)=>{onSearch(e.target.value)}} type="text" name="search" id="search" placeholder="Search Product In Your Stock"></input>
                <button className='button btn btn-outline-dark'><Link to={"/decreasingStock"} replace={true} style={{textDecoration:"none", color:"inherit"} }>Search Decreasing Stock</Link></button>
            </div>
            
        </div>
    );
}

export default SearchBar;