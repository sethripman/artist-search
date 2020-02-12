import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ name }) => {
  return (
    <section>
      <Link to>
        <p>{name}</p>
      </Link>
    </section>
  );};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ListItem;
