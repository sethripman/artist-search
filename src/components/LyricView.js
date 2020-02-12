import React from 'react';
import PropTypes from 'prop-types';


const LyricView = ({ lyrics = '' }) => {
  const br = '<br>';
  const lyricElements = lyrics.split('\n').map((el, i)=>{
    return (
      el ? <div key={i}>{el}</div> : <br key={i} />
      //<p key={i}>{el ? el : <br></br>}</p>
    );
  });

  return (
    <>
      { lyricElements }
    </>
  );
};

LyricView.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default LyricView;
