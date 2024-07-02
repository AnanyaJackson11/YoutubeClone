import React from 'react';
import './Seachlist.css';
import { FaSearch } from 'react-icons/fa';

function SearchList({ TitleArray , setsearchQuery}) {
    return (
        <div className='container_sl'>
            {
                TitleArray.map(m => {
                    return (
                        <p key={m} 
                        onClick={e=>setsearchQuery(m)}
                        className='titleitem'>
                            <FaSearch />
                            {m}
                        </p>
                    );
                })
            }
        </div>
    );
}

export default SearchList;
