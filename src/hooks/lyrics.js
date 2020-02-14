import { useState, useEffect } from 'react';
import { getLyrics } from '../services/musicBrainz';
import { useParams } from 'react-router-dom';

export const useLyrics = (artist, title) => {
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    getLyrics(artist, title)
    .then(lyrics => {
      console.log(JSON.stringify(lyrics, null,2));
      return lyrics;
    })
      .then((lyrics) => setLyrics(lyrics));
  }, []);
  return lyrics;
};
