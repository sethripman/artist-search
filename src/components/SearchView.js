import React from 'react';
import { useArtist } from '../hooks/artist.js';
import { Link } from 'react-router-dom';

const SearchView = () => {
  const { artists, search, setSearch } = useArtist();

  const artistElements = artists.map((el, id) => {
    return (
      <li key={id}>
        <Link>
          <p>{el.name}</p>
        </Link>
      </li>
    );
  });

  return (
    <>
      <input type="text" onChange={({ target }) => setSearch(target.value)} 
        value={search} name="search"/>

      <ul>
        {artistElements}
      </ul>
    </>
  );
};

export default SearchView;
