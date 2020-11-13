import React, { Component } from 'react';
import List from '../List/List';
// import Stage from '../Stage/Stage';
// import Chat from '../Chat/Chat';
// import STORE from '../List/store';
import {
  FaChevronLeft,
  FaThumbsUp,
  FaThumbsDown,
  FaRegHandPaper,
  FaHands,
  FaComment,
  FaPhone,
} from 'react-icons/fa';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <List />

        <footer>
          <div className='control-bar-left'>
            <button className='control-button'>
              <FaChevronLeft />
            </button>
            <button className='control-button'>
              <FaThumbsUp />
            </button>
            <button className='control-button'>
              <FaThumbsDown />
            </button>
            <button className='control-button'>
              <FaRegHandPaper />
            </button>
            <button className='control-button'>
              <FaHands />
            </button>
          </div>
          <div className='control-bar-right'>
            <button className='control-button'>
              <FaComment />
            </button>
            <button className='control-button'>
              <FaPhone />
            </button>
            <button className='join-button'>Join stage</button>
          </div>
        </footer>
      </main>
    );
  }
}

export default App;
