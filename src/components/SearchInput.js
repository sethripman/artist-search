import React, { useState } from 'react';

const SearchInput = () => {
  const [setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setName(event.target.value);
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Search</button>
      </form>
    </>
  );
};

export default SearchInput;
