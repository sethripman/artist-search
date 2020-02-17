import { useState, useEffect } from 'react';
import { getArtists } from '../services/musicBrainz';

export const useMusic = (searchParam) => {
  const [artists, setArtists] = useState({ artists: [] });
  const [page, setPage] = useState(0);

  useEffect(() => {
    if(!searchParam) return;
    
    getArtists(searchParam, page)
      .then(newArtists => {
        setArtists(newArtists);
      });
  }, [searchParam]);


  return artists ;
};
