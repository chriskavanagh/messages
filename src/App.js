import React, { Component } from 'react';
//import Message from './components/Message';
import MesssageList from './components/MesssageList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faCalendar, faFile, faEdit, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import './App.css';
library.add(faEnvelope, faKey, faCalendar, faFile, faEdit, faKeyboard);


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
