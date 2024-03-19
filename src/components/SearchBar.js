import React from "react";
import { FaSearch } from "react-icons/fa";
import { Navigate, Link } from 'react-router-dom';



const SearchBar = ({onSearch}) => {
    return  (
        <div className="search-bar d-flex justify-content-center mb-3 mt-3">
            <input onChange={(e)=>{onSearch(e.target.value)}} type="text" name="search" id="search" className="form-control" placeholder="Search Product"></input>
            <button className='d-flex btn btn-outline-dark ms-auto align-self-end'><Link to={"/decreasingStock"} replace={true} style={{textDecoration:"none", color:"inherit"} }>Search Decreasing Stock</Link></button>
        </div>
    );
}

export default SearchBar;