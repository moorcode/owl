import React, { Component } from "react";
import List from "../List/List";
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
} from "react-icons/fa";

import "./App.css";

class App extends Component {
  render() {
    return (
      <main className='App'>
        <List />

        <footer>
          <div className='control-bar-left'>
          <button><FaChevronLeft /></button>
          <button><FaThumbsUp /></button>
          <button><FaThumbsDown /></button>
          <button><FaRegHandPaper /></button>
          <button><FaHands /></button>
          </div>
          <div className='control-bar-right'>
          <button><FaComment /></button>
          <button><FaPhone /></button>
          <button>Join stage</button>
          </div>
        </footer>
      </main>
    );
  }
}

export default App;
