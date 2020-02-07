import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onChange, onClick }) => (
  <>
    <input type="text" onChange={onChange} name="search"/>
    <button onClick={onClick}>Search</button>
  </>
);

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SearchInput;
