import React, { Component } from 'react';
import Participant from '../Participant/Participant';
import STORE from './store';

import { FaLink, FaQuestionCircle, FaCog } from 'react-icons/fa';
import './List.css'

class List extends Component {
  render() {
    const ParticipantArray = STORE.map((item) => 
    <Participant 
      avatar={STORE.avatar}
      name={STORE.name}
      inSession={STORE.inSession}
      onStage={STORE.onStage} /> )
    return (
      <section className='List'>
        <header>
          <p>Chat</p>
          <p>Participants ( 5 )</p>
          <button><FaCog /></button>
          <button><FaLink /></button>
          <button><FaQuestionCircle /></button>
        </header>
        <ul>
          {ParticipantArray}
        </ul>
      </section>
    );
  }
}

export default List;