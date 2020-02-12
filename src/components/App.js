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
  // Method 1: To view individual components, return the component like below
  //return <ListContainer listItems = {[]}/>;
  //return <ArtistView listAlbums={[]} artist="fake"/>;
  
  //return <LyricView />;

  // Method 2: To view a component in the router, set the path to /
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={LyricView} /> */}
        <Route exact path="/" component={ListContainer} />
        <Route path="/albums/:id/:artist" component={ArtistView} />
        <Route path="/release/:id/:artist" component={ReleaseView} /> 
        <Route path="/lyric/:id/:artist/:title" component={LyricView} />
      </Switch>
    </Router>
  );
}
