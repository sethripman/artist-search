import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const sample = [{ 'id':'04b86bb4-a8a3-454d-88d9-9836ce466bac', 'length':165000, 'title':'White Lace and Strange', 'video':false, 'disambiguation':'live, 1987-05-06: KAOS Olympia Community Radio, Evergreen State College, Olympia, WA, USA' }, { 'disambiguation':'live, 1987-05-06: KAOS Olympia Community Radio, Evergreen State College, Olympia, WA, USA', 'id':'33968764-bd59-4891-a27e-f50b3d1d32b9', 'length':255000, 'title':'Love Buzz', 'video':false }, { 'disambiguation':'demo / alternate mix', 'id':'4cd5972a-845d-4862-8cdb-f0a4998f0e35', 'video':false, 'title':'Gallons of Rubbing Alcohol Flowing Through the Strip', 'length':533000 }, { 'video':false, 'length':160000, 'title':'Vendetagainst', 'id':'5a6498d6-769d-434f-a871-4a5d5e3f3397', 'disambiguation':'live, 1987-05-06: KAOS Olympia Community Radio, Evergreen State College, Olympia, WA, USA' }, { 'disambiguation':'live, 1987-05-06: KAOS Olympia Community Radio, Evergreen State College, Olympia, WA, USA', 'video':false, 'length':128000, 'title':'Annorexorcist', 'id':'5f566137-267f-4b28-9d09-a14950ac0b48' }, { 'id':'ae699179-1c68-477c-958b-d65a292b5994', 'title':'Spank Thru', 'length':231000, 'video':false, 'disambiguation':'live, 1987-05-06: KAOS Olympia Community Radio, Evergreen State College, Olympia, WA, USA' }, { 'title':'Downer', 'length':172000, 'video':false, 'id':'d68c207e-9747-4a7c-a26f-fb05b3e3e52e', 'disambiguation':'live, 1987-05-06: KAOS Olympia Community Radio, Evergreen State College, Olympia, WA, USA' }, { 'disambiguation':'live, 1987-05-06: KAOS Olympia Community Radio, Evergreen State College, Olympia, WA, USA', 'id':'daf6c55c-d4f9-4d5e-af1a-d72497b44d5b', 'video':false, 'title':'Mexican Seafood', 'length':169000 }, { 'disambiguation':'live, 1987-05-06: KAOS Olympia Community Radio, Evergreen State College, Olympia, WA, USA', 'id':'e096667c-cc6a-45d1-9213-3c7cf68a53bc', 'length':270000, 'title':'Pen Cap Chew', 'video':false }, { 'disambiguation':'live, 1987-05-06: KAOS Olympia Community Radio, Evergreen State College, Olympia, WA, USA', 'id':'e547df88-28d0-4a33-899c-85e4ad0e44c0', 'video':false, 'title':'Hairspray Queen', 'length':304000 }, { 'disambiguation':'live, 1987-05-06: KAOS Olympia Community Radio, Evergreen State College, Olympia, WA, USA', 'video':false, 'title':'The Barber', 'length':167000, 'id':'f0069c12-b984-46fe-8814-4c3009a09e0e' }];

const ReleaseView = ({ listSongs = [] }) => {
  
  const songElements = sample.map((el, i) => {    
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
