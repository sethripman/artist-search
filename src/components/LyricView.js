import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const sample = 'Turn your magic on, Umi she\'d say\r\nEverything you want\'s a dream away\r\nWe are legends, every day\r\n\nThat\'s what she told me\r\nTurn your magic on, to me she\'d say\n\nEverything you want\'s a dream away\n\nUnder this pressure, under this weight\n\nWe are diamonds \n\n\n\nI feel my heart beating\n\nI feel my heart underneath my skin\n\nI feel my heart beating\n\nOh, you make me feel\n\nLike I\'m alive again\n\n\n\nAlive again!\n\n\n\nOh, you make me feel\n\nLike I\'m alive again\n\n\n\nSaid I can\'t go on, not in this way\n\nI\'m a dream that died by light of day\n\nGonna hold up half the sky and say\n\nOnly I own me\n\n\n\nI feel my heart beating\n\nI feel my heart underneath my skin\n\nOh, I can feel my heart beating\n\n\'Cause you make me feel\n\nLike I\'m alive again\n\n\n\nAlive again!\n\n\n\nOh, you make me feel\n\nLike I\'m alive again\n\n\n\nTurn your magic on, Umi she\'d say\n\nEverything you want\'s a dream away\n\nUnder this pressure, under this weight\n\nWe are diamonds taking shape\n\nWe are diamonds taking shape\n\n\n\n(Woo, woo)\n\n\n\nIf we\'ve only got this life\n\nThis adventure, oh then I\n\nAnd if we\'ve only got this life\n\nYou\'ll get me through alive\n\nAnd if we\'ve only got this life\n\nIn this adventure, oh then I\n\nWanna share it with you\n\nWith you, with you\n\nI said, oh, say oh\n\n\n\n(Woo hoo, woo hoo...)';
const LyricView = ({ lyrics = '' }) => {
  const br = '<br>';
  const lyricElements = sample.split('\n').map((el, i)=>{
    return (
      el ?  <div key={i}>{el}</div> : <br key={i} />
      // el ? <div key={i}>{el}</div> : <br key={i} />
      //<p key={i}>{el ? el : <br></br>}</p>
      // <>
      //   {el}<br key={i}/>
      // </>
    );
  });

  return (
    <>
      { lyricElements }
    </>
  );
};

// LyricView.propTypes = {
//   lyrics: PropTypes.string.isRequired
// };

export default LyricView;
