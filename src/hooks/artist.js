import { useEffect, useState } from 'react';
import { getArtists } from '../services/musicBrainz';

export const useArtist = () => {
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const handleSubmit = () => {
    event.preventDefault();
    setSearch(search);
    return artists;
  };

  const handlePageChange = (value) => {
    if(value === 'next'){
      setPage(page + 1);
    }
    if(value === 'previous' && page !== 1){
      setPage(page - 1);
    }
  };

  useEffect(() => {
    if(!search) return;
    getArtists(search, page)
      .then(res => {
        setArtists(res.artists);
      });
  }, [search, page]);
  return { artists, search, setSearch, handleSubmit, handlePageChange };
};
  

