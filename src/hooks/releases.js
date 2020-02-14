import { useState, useEffect } from 'react';
import { getReleases } from '../services/musicBrainz';
import { useParams } from 'react-router-dom';

export const useReleases = (id) => {
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    getReleases(id)
      .then(({ releases }) => setReleases(releases));
  }, []);

  return { releases };
};
