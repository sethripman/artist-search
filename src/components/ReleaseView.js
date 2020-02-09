import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const ReleaseView = ({ listSongs = [] }) => {
  
  const songElements = listSongs.map((el, i) => {    
    return (
      <li key={i}>
        <Link to={`/lyric/${el.id}`}>
          <h2>{el.title}</h2>
        </Link>
      </li>
    );
  });

  return (
    <ul>
      {songElements}
    </ul>
  );
};

ReleaseView.propTypes = {
  listSongs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired,
};

export default ReleaseView;
