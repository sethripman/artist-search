import React, { useState } from 'react';

const SearchInput = () => {
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <button>Search</button>
      </form>
    </>
  );
};

export default SearchInput;
