import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';



const ListContainer = ({ listItems }) => {
  const listElements = listItems.map((el, id) => {
  //const listElements = listItems.map(({ name }) => {
    // console.log(el);
    //console.log(`name is ${el.name}`);
    //const nameConv = el.name ? el.name : 'WhatHappened';
    return (<li key={id}>
      <ListItem name={el.name} />
    </li>);
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
