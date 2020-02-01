import React, { Component } from "react";

import '../styles/App.css';
import '../styles/index.css';
import Header from './Header';
import Feed from './Feed';
import Profile from './Profile';
import {BrowserRouter as Router,Route} from 'react-router-dom';
class App extends Component {
    render() {
        return (
          <Router>
            <div className="App">
              <Header />
              <Route path='/' component={Feed} exact/>
              <Route path='/profile' component={Profile} exact/>
              
            </div>
          </Router>
        );
    }
}

export default App;
