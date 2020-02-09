import { useState, useEffect } from 'react';
import { getLyrics } from '../services/musicBrainz';


export const useLyrics = (artist, songTitle) => {
  const [lyrics, setLyircs] = useState([]);
  useEffect(() => {
    getLyrics(artist, songTitle)
      .then(setLyircs);
  });
  return lyrics;
};
