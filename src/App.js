import React, { Component } from 'react';

import Home from './Screens/Home';
import { BrowserRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
        <BrowserRouter>
 <Home/>
  </BrowserRouter>
    );
  }
}

export default App;
