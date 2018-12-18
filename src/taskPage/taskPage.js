import React, { Component } from 'react';

import './taskPage.css';

export default class TaskPage extends Component {
  render(){
    return(
      <div className="container3">

        <h1 className="header3">Tasks for your</h1>
        <h1 className="header4">Secret Child</h1>

        <div className="menu">
            <ul>
              <li>
                <label>
                  <input type="checkbox" name=""/>
                  <span class="icon"></span>
                  <span class="list">Sing a song</span>
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" name=""/>
                  <span class="icon"></span>
                  <span class="list">Tell us a joke</span>
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" name=""/>
                  <span class="icon"></span>
                  <span class="list">Mimic a personality</span>
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" name=""/>
                  <span class="icon"></span>
                  <span class="list">Immitate a personality</span>
                </label>
              </li>

              <li>
                <label>
                  <input type="checkbox" name=""/>
                  <span class="icon"></span>
                  <span class="list">Sell a pen</span>
                </label>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}
