import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSongs } from '../hooks/songs';


const ReleaseView = () => {
  const { id, artist } = useParams();
  const albums = useSongs(id);
  const songElements = albums.map((el, i) => {    
    return (
      <li key={i}>
        <Link to={`/lyric/${el.id}/${artist}/${el.title}`}>
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

export default ReleaseView;
