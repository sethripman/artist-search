export const getArtists = (searchString, pageNumber = 1) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchString}&fmt=json&limit=25&offset=${pageNumber}`)
    .then(res => 
      res.json()
    )
    .then(res => 
      res
    );
  
};
export const getReleases = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
    .then(res =>
      res.json()
    )
    .then(res => 
      res
    );
};

export const getSongs = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res =>
      res.json()
    )
    .then(res =>{
      console.log(`res: ${res}`);
      return res;
    });
};
export const getLyrics = (artist, songTitle) => {
  
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
    .then(res => 
      res.json()
    )
    .then(res => {
      return res;
    });
};


