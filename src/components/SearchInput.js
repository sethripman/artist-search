import React, { useState } from 'react';
//import PropTypes from 'prop-types';

// const SearchInput = ({ onChange = ()=>{}, onClick = ()=>{} }) => (
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
        {/* <input type="text" onChange={onChange} name="search"/>
      <button onClick={onClick}>Search</button> */}
      </form>
    </>
  );
};

// SearchInput.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   onClick: PropTypes.func.isRequired
// };

export default SearchInput;
