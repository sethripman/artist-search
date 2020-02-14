import React, { useState, useEffect } from 'react';
//import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';
//import SearchView from './SearchView';
import { useMusic } from '../hooks/music';


const ListContainer = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const sample = useMusic(searchTerm);
  
  const handleSubmit = event => {
    event.preventDefault();
    setSearchTerm(query);
  };
  
  useEffect(() => {
    console.log('render');
  }, [searchTerm]);
  
  const listElements = sample.artists.map((el, i) => {
    return (        
      <li key={i}>
        <Link to={`/albums/${el.id}/${el.name}`}>
          <ListItem name={el.name} />
        </Link>
      </li>
    );
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="search by artist" value = {query} onChange = {(event) => setQuery(event.target.value)} /> 
        <button>Search</button>
      </form>
      <ul>
        {listElements}
      </ul>
    </>
  );
};

export default ListContainer;
