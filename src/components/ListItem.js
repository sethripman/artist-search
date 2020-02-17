import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name }) => {
  return (
    <section>
      <p>{name}</p>
    </section>
  );};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ListItem;
