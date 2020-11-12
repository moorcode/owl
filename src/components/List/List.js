import React, { Component } from 'react';
import Participant from '../Participant/Participant';
import STORE from './store';

import { FaQuestionCircle } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
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
          <p>Participants ()</p>
          <FaCog />
          <i class="fas fa-link"></i>
          <FaQuestionCircle />
        </header>
        <ul>
          {ParticipantArray}
        </ul>
      </section>
    );
  }
}

export default List;