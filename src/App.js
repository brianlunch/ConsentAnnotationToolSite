import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import history from './Utils/History';
import Home from './Pages/Home'
import Report from './Pages/Report'
import Study from './Pages/Study'
import HowTo from './Pages/HowTo'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Reported from './Pages/Reported';
import Google from './StudyPages/Google';
import Reddit from './StudyPages/Reddit';
import Facebook from './StudyPages/Facebook';
import Spotify from './StudyPages/Spotify';
import Netflix from './StudyPages/Netflix';

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className="App">
      
      <Router basename={process.env.PUBLIC_URL} history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/HowTo" component={HowTo} />
          <Route exact path="/report" component={Report} />
          <Route exact path="/reported" component={Report}/>
          <Route exact path="/study" component={Study}/>
          <Route exact path="/study/Google" component={Google}/>
          <Route exact path="/study/Reddit" component={Reddit}/>
          <Route exact path="/study/Facebook" component={Facebook}/>
          <Route exact path="/study/Spotify" component={Spotify}/>
          <Route exact path="/study/Netflix" component={Netflix}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;