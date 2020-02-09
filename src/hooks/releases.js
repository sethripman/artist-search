import { useState, useEffect } from 'react';
import {  getReleases } from '../services/musicBrainz';


export const useReleases = (id) => {
  const [releases, setReleases] = useState([{}]);
  useEffect(()=> {
    getReleases(id)
      .then(setReleases);
  }, [id]);
  return releases;
};
