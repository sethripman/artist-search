import React from 'react';
import { Link } from 'react-router-dom';
import { getSongs } from '../services/musicBrainz';
import { getReleases } from '../services/musicBrainz';
import { useReleases } from '../hooks/releases';
import { useParams } from 'react-router-dom';

const ArtistView = () => {
  
  const { id, artist } = useParams();
  const releases = useReleases(id);
  const albumElements = releases.releases.map(el => {
    const title = el.title;
    
    const coverArt = el['cover-art-archive'].front ? `http://coverartarchive.org/release/${el.id}/front` : 'https://img.discogs.com/BLRZgvXg7CYPxEtCZeJ-0AIryyc=/fit-in/530x536/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2544883-1298167563.jpeg.jpg';
      
    return (
      <li key={el.id}>
        <Link to={`/release/${el.id}/${artist}`}>
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

export default ArtistView;
