export const getArtists = (searchString, pageNumber = 0) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchString}&fmt=json&limit=25&offset=${pageNumber}`)
    .then(res => ([res.success, res.json()]))
    .then(([success, json]) => {
      if(!success) throw 'Artist Search Failed.';
      return json;
    });
};
export const getReleases = (id, pageNumber = 0) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=25&offset=${pageNumber}`)
    .then(res => ([res.success, res.json()]))
    .then(([success, json]) => {
      if(!success) throw 'Release Search Failed.';
      return json;
    });
};
export const getSongs = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res => ([res.success, res.json()]))
    .then(([success, json]) => {
      if(!success) throw 'Failed to retrieve song list.';
      return json;
    });
};
export const getLyrics = (artist, songTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
    .then(res => ([res.success, res.json()]))
    .then(([success, json]) => {
      if(!success) throw 'Failed to retrieve song lyrics.';
      return json;
    });
};
