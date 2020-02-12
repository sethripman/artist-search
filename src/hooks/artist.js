import { useState, useEffect } from 'react';
import { getArtists } from '../services/musicBrainz';
import { useHistory } from 'react-router-dom';

export const useArtist = () => {
  const [search, setSearch] = useState('');
  const [searchString, setSearchString] = useState('');
  const [artists, setArtists] = useState({
    artists: []
  });
  const history = useHistory;

  useEffect(() => {
    getArtists(searchString)
      .then(setArtists);
  }, [searchString]);

  const handleSubmit = event => {
    event.preventDefault();
    history.pushState('/');
    setSearchString(search);
  };

  return { artists: artists.artists,  handleSubmit, search, setSearch };
};

  

