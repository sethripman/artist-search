import React from 'react';
import ListContainer from './ListContainer';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LyricView from './LyricView';
import ReleaseView from './ReleaseView';
import ArtistView from './ArtistView';
import styles from './App.css';

export default function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListContainer} />
        <Route path="/albums/:id/:artist" component={ArtistView} />
        <Route path="/release/:id/:artist" component={ReleaseView} /> 
        <Route path="/lyric/:id/:artist/:title" component={LyricView} />
      </Switch>
    </Router>
  );
}
