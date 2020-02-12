import { useState, useEffect } from 'react';
import { getArtists, getReleases, getSongs, getLyrics } from '../services/musicBrainz';

export const useMusic = (searchParam) => {
  const [artists, setArtists] = useState({ artists: [] });
  const [page, setPage] = useState(0);
  //const [searchString, setSearchString] = useState(searchparam);

  useEffect(() => {
    if(!searchParam) return;
    
    getArtists(searchParam, page)
      .then(newArtists => {
        //console.log(newArtists);
          
        setArtists(newArtists);
      });
  }, [searchParam]);

  //const handleChange = ({ target }) => setSearchString(target.value);

  return artists ;
};
