import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const ListContainer = ({ listItems }) => {
  const listElements = listItems.map(({ name }) => {
    <li key={name}>
      <ListItem text={name} />
    </li>;
  });

  return (
    <ul>
      {listElements}
    </ul>
  );
};

ListContainer.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
};

export default ListContainer;
