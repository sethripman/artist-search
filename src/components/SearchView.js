import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import ListContainer from './ListContainer';

const SearchView = () => {
  return (
    <>
      {/* <Link to={`/release/${artist}/${title}/${id}`}> */}
        <SearchInput />
        <ListContainer />
      {/* </Link> */}
    </>
  );
};

export default SearchView;
