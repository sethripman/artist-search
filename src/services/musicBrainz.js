export const getArtists = (searchString, page = 0) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://musicbrainz.org/ws/2/artist?query=${searchString}&fmt=json&offset=${(page) * 25}`,
    {
      headers: {
        origin: null
      }
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};

export const getReleases = (id, page = 0) => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json&limit=25&offset=${(page) * 25}`,
    {
      headers: {
        origin: null
      }
    }
  ).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};

export const getSongs = (id) => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`,
    {
      headers: {
        origin: null
      }
    }).then(res => {
    if(res.ok) return res.json();
    throw `Response: ${res.status}`;
  });
};
export const getLyrics = (artist, songTitle) => {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.lyrics.ovh/v1/${artist}/${songTitle}`,
    {
      headers: {
        origin: null
      }
    })
    .then(res => {
      if(res.ok) return res.json();
      throw `Response: ${res.status}`;
    });
};
