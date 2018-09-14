import React, { Component } from 'react';
import './App.css';
import Gride from './grid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faStreetView } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone)
library.add(faWrench)
library.add(faStreetView)
library.add(faStore)

class App extends Component {
  render() {
    return (
      <div style={{ height:'100vh'}}>
     	<Gride/>
      </div>
    );
  }
}

export default App;
