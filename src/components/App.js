import React from 'react';
import ListContainer from './ListContainer';
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
          <Route path="/" component={LyricView} />
          <Route path="/" component={ListContainer} />
          <Route path="/albums/:id" component={ArtistView} />
          <Route path="/release/:artist/:title/:id" component={ReleaseView} /> 
          <Route path="/" component={ReleaseView} /> 
        </Switch>
      </Router>
    </>
  );
}
