import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLyrics } from '../hooks/lyrics';
import { useParams } from 'react-router-dom';


const LyricView = () => {
  const { artist, title } = useParams();
  const lyrics  = useLyrics(artist, title);
  let i = 0;
  return (
    <pre key={i++}>
      {lyrics.lyrics}
    </pre>
  );
};

export default LyricView;
