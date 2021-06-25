import React from 'react';

const Search = () => {
    return (
        <div className="boxSearch">
            <form>
                <input className="inputSearch" type="text" placeholder="Rechercher ..."></input>
                <input className="inputSearch" type="submit" value="Search"></input>
            </form>
        </div>
    );
};

export default Search;