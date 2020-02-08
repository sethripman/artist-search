import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ name }) => {
  // console.log(`nameee ${name}`);
  return (
    <section>
      <p>{name}</p>
    </section>
  );};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ListItem;
