import React, { Component } from 'react';
import Participant from '../Participant/Participant';
import STORE from './store';

import { FaLink, FaQuestionCircle, FaCog } from 'react-icons/fa';
import './List.css'

class List extends Component {
  render() {
    const ParticipantArray = STORE.map((item) =>
     
    <Participant 
      avatar={item.avatar}
      name={item.name}
      status={item.inSession ? 'in session' : 'on stage'} /> )
    return (
      <section className='List'>
        <header>
          <button className='view-button'>Chat</button>
          <button className='view-button'>Participants ( 5 )</button>
          <button className='control-button'><FaCog /></button>
          <button className='control-button'><FaLink /></button>
          <button className='control-button'><FaQuestionCircle /></button>
        </header>
        <ul>
          {ParticipantArray}
        </ul>
      </section>
    );
  }
}

export default List;