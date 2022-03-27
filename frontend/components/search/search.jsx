import React from 'react';
import SearchBar from './search_bar';
import PlantIndexContainer from '../plant_index/plant_index_container';

const Search = ({updateFilter}) => {
    return (
        <div>
            <SearchBar updateFilter={updateFilter} />
            <PlantIndexContainer />
        </div>
    );
}

export default Search;