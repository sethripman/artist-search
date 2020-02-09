import React from 'react';
import SearchInput from './SearchInput';
import ArtistView from './Artist/Artist';
import ReleaseView from './Release/Release';
import SongView from './Song/Song';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={SearchInput}></Route>
      <Route path="/search" component={SearchInput}></Route>
      <Route path="/artist/:name/:id" component={ArtistView}></Route>
      <Route path="/release/:name/:title/:id" component={ReleaseView}></Route>
      <Route path="/song/:name/:release/:id" component={SongView}></Route>
    </Router>
  );
}
