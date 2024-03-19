import React from "react";
import { FaSearch } from "react-icons/fa";


const SearchBar = ({onSearch}) => {
    return  (
        <div className="search-bar d-flex justify-content-center mb-3 mt-3">
            <input onChange={(e)=>{onSearch(e.target.value)}} type="text" name="search" id="search" className="form-control" placeholder="Search Product"></input>
        </div>
    );
}

export default SearchBar;