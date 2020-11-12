import React, { Component } from 'react';
import List from '../List/List';
// import Stage from '../Stage/Stage';
// import Chat from '../Chat/Chat';
// import STORE from '../List/store';
import { FaChevronLeft } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaThumbsDown } from 'react-icons/fa';
import { FaRegHandPaper } from 'react-icons/fa';
import { FaHands } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <List />
       
        <footer>
          <div className='chatControls'>
          <FaChevronLeft />
          <FaThumbsUp />
          <FaThumbsDown />
          <FaRegHandPaper />
          <FaHands />
          </div>
         
          <i class="fas fa-ellipsis-h"></i>
          <FaPhone />
          <button>Join stage</button>
        </footer>
      </main>
    );
  }
}

export default App;