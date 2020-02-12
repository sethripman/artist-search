import React from 'react';
//import ListContainer from './ListContainer';
import ReleaseView from './ReleaseView';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LyricView from './LyricView';

//import ArtistView from './ArtistView';

export default function App() {
  // Method 1: To view individual components, return the component like below
  //return <ListContainer listItems = {[]}/>;
  //return <ArtistView listAlbums={[]} artist="fake"/>;
  
  return <LyricView />;

  // Method 2: To view a component in the router, set the path to /
  // return (
  //   <Router>
  //     <Switch>
  //       <Route path="/" component={LyricView} />
  //       {/* <Route path="/" component={ListContainer} />
  //       <Route path="/albums/:id" component={ArtistView} />
  //       <Route path="/release/:artist/:title/:id" component={ReleaseView} /> */}
  //       {/* <Route path="/" component={ReleaseView} /> */}
  //     </Switch>
  //   </Router>
  // );
}
