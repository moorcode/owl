import React, { Component } from 'react';
// import STORE from '../List/store';
import './Participant.css'

class Participant extends Component {
  render() {
    return (
      <li>
        <img alt='avatar' src={this.props.avatar} />
        <p>{this.props.name}</p>
        
      </li>)
  }
}
export default Participant;