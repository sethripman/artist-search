import { useState, useEffect } from 'react';
import { getArtists, getReleases, getSongs, getLyrics } from '../services/musicBrainz';

export const useArtist = (searchString) => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    getArtists(searchString)
      .then(setArtists);
  });
  return artists;
};

export const useReleases = (id) => {
  const [releases, setReleases] = useState([{}]);
  useEffect(()=> {
    getReleases(id)
      .then(setReleases);
  }, [id]);
  return releases;
};

export const useSongs = (id) => {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    getSongs(id)
      .then(setSongs);
  });
  return songs;
};

export const useLyrics = (artist, songTitle) => {
  const [lyrics, setLyircs] = useState([]);
  useEffect(() => {
    getLyrics(artist, songTitle)
      .then(setLyircs);
  });
  return lyrics;
};
  

