import { useState, useEffect } from 'react';
import { getReleases } from '../services/musicBrainz';
import { useParams } from 'react-router-dom';

export const useReleases = (id) => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    //if(!searchParam) return;
    getReleases(id)
      .then(({ releases }) => setReleases(releases));
  }, []);

  console.log(`releases: ${releases}`);

  return { releases };
};
