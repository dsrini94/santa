import React, { Component } from 'react';

import './welcomePage.css'

import SnowStorm from 'react-snowstorm';


export default class WelcomePage extends Component {
  render(){
    return(
      <div className="homePage">
        <SnowStorm />

        <div className="gameName">
            <img className="santa" src="https://www.online-slot.de/wp-content/uploads/2017/12/secret-santa-small.png" />
        </div>

        <div className="greetingText">
          <span>Welcome to Secret </span>
          <span className="colorRed">Santa</span>
        </div>

        <div className="infoText">
          <span className="line1">Scroll down to know your</span>
          <span className="line2">Secret Child</span>
        </div>
      </div>
    );
  }
}
