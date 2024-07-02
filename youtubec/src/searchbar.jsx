import React, { useState } from "react";
import './searchbar.css';
import { FaSearch } from 'react-icons/fa';
import { BsMicFill } from 'react-icons/bs';
import SearchList from "./searchlist";

function SearchBar() {
    const [searchQuery, setsearchQuery] = useState("");
    const [searchList, setsearchList] = useState(false); 
    const TitleArray = ['video1', 'video2', 'Animation Video'].filter(q => q.toUpperCase().includes(searchQuery.toUpperCase()));

    return (
        <div className="searchbar_cont">
            <div className='cont2'>
                <div className="search_div">
                    <input
                        type='text'
                        className="ibox"
                        placeholder="Search"
                        onChange={e => setsearchQuery(e.target.value)}
                        value={searchQuery}
                        onClick={e => setsearchList(true)}
                    />
                    <FaSearch className="sea_ico_Navbar"
                        onClick={e => setsearchList(false)}
                    />
                    <BsMicFill className="mic_Navbar" />
                    {searchQuery && searchList &&
                        <SearchList
                            setsearchQuery={setsearchQuery}
                            TitleArray={TitleArray}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
