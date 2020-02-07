import React from 'react';
import { Link } from 'react-dom';
import PropTypes from 'prop-types';

const ArtistView = ({ listAlbums, artist }) => {
  const albumElements = listAlbums.map(el => {
    const title = el.title;
    const id = el.id;
    const coverArt = el['cover-art-archive'].front ? `http://coverartarchive.org/release/${id}/front` : 'https://img.discogs.com/BLRZgvXg7CYPxEtCZeJ-0AIryyc=/fit-in/530x536/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2544883-1298167563.jpeg.jpg';
      
    return (
      <li key={id}>
        <Link to={`/release/${artist}/${title}/${id}`}>
          <img src={coverArt}></img>
          <h2>{title}</h2>
        </Link>
      </li>
    );
  });

  return (
    <ul>
      {albumElements}
    </ul>
  );
};

ArtistView.propTypes = {
  listAlbums: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  })).isRequired,
  artist: PropTypes.string.isRequired
};

export default ArtistView;
