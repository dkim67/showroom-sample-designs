import React, { Component } from 'react';
import Curtain from './components/curtain/Curtain';
import Couch from './components/couch/Couch';
import './App.css';

class App extends Component {
  state = {
  
  };
  render() {
    return (
      <div className="App">
        <div className='wall test'>
          <Curtain />
         <Couch />
        </div>
        <div className='base' style={{ height: '25px' }}></div>
        <div className='floor'></div>
      </div>
    );
  }
};

export default App;



