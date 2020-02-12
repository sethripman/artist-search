import React from 'react';
import ListContainer from './ListContainer';
import { useArtist } from '../hooks/artist.js';

const SearchView = () => {
  const { artists,  handleSubmit, search, setSearch } = useArtist();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={({ target }) => setSearch(target.value)} 
          value={search} name="search"/>
      </form>
      <ListContainer listItems={artists}/>
    </>
  );
};

export default SearchView;
