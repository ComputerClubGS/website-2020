import React from 'react';
import './App.css';
import Home from './Components/Home';
import Events from './Components/Events';
import Footer from './Components/Footer';
import Members from './Components/Members';
import Navbarr from './Components/Navbarr'
import {Switch, Route, BrowserRouter} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarr/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/members">
            <Members />
          </Route>
          
        </Switch>
      </BrowserRouter>
      <Footer />
   </div>
  );
}
export default App;