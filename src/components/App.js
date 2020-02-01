import React, { Component } from "react";

import '../styles/App.css';
import '../styles/index.css';
import Header from './Header';
import Feed from './Feed';
import Profile from './Profile';
class App extends Component {
    render() {
        return (
          <div className="App">
            <Header />
            <Feed />
            <Profile />
          </div>
        );
    }
}

export default App;
