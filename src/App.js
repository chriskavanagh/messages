import React, { Component } from 'react';
//import Message from './components/Message';
import MesssageList from './components/MesssageList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <MesssageList />
      </div>
    );
  }
}

export default App;
