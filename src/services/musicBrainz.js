export const getArtists = (searchString, pageNumber = 1) => {
  //http://musicbrainz.org/ws/2/artist\?query\="coldplay"\&fmt\=json
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchString}&fmt=json&limit=25&offset=${pageNumber}`)
    .then(res => 
      res.json()
    )
    .then(res => 
      res
    );
  // return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchString}&fmt=json&limit=25&offset=${pageNumber * 25}`)
  //   .then(res => ([res.success, res.json()]))
  //   .then(([success, json]) => {
  //     if(!success){
  //       console.log(json);
  //       console.log(success); 
  //       throw 'Artist Search Failed.';}
  //     //return json;
  //   });
};
export const getReleases = (id, pageNumber = 0) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
    .then(res =>
      res.json()
    )
    .then(res => 
      res
    );
  // return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&offset=${pageNumber * 25}`)
  //   .then(res => ([res.success, res.json()]))
  //   .then(([success, json]) => {
  //     console.log(`success is: ${success}`);
  //     if(!success) throw 'Release Search Failed.';
  //     return json;
  //   });
};
export const getSongs = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)//0444b84e-15af-47a4-810a-773258eb9395
  // return fetch(`http://musicbrainz.org/ws/2/recording?release=0444b84e-15af-47a4-810a-773258eb9395&fmt=json`)
    .then(res =>
      res.json()
    )
    .then(res =>{
      console.log(`res: ${res}`);
      return res;
    });
  // return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
  //   .then(res => ([res.success, res.json()]))
  //   .then(([success, json]) => {
  //     if(!success) throw 'Failed to retrieve song list.';
  //     return json;
  //   });
};
export const getLyrics = (artist, songTitle) => {
  
  return fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
    .then(res => 
      res.json()
    )
    .then(res => {
      return res;
    });
  // .then(res => ([res.success, res.json()]))
  // .then(([success, json]) => {
  //   if(!success) throw 'Failed to retrieve song lyrics.';
  //   return json;
};


