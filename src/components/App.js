import React from 'react';
import SearchView from './SearchView';
import ReleaseView from './ReleaseView';
import ArtistView from './ArtistView';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LyricView from './LyricView';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchView} />
          <Route path="/albums/:id/:artist" component={ArtistView} />
          <Route path="/release/:id/:artist" component={ReleaseView} /> 
          <Route path="/lyric/:id/:artist/:title" component={LyricView} /> 
        </Switch>
      </Router>
    </>
  );
}

// Flatten searchview so it contains listitem and listcontainer
// Refactor the other services
// Push to history
// Paging button component
// Pass relevant default state through history, not through prop drilling
// 
