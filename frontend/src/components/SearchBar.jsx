import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${searchTerm}`);
            setSearchTerm('');
        }
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input 
                type="text" 
                placeholder="Search for products..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
