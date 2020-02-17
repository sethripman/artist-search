import { useState, useEffect } from 'react';
import { getSongs } from '../services/musicBrainz';

export const useSongs = (id) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs(id)
      .then(({ recordings }) => setSongs(recordings));
  }, []);
  return songs;
};
