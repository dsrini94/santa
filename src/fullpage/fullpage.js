import React, { Component } from 'react';

import {ScrollToTopOnMount, SectionsContainer, Section} from 'react-fullpage';

import WelcomePage from '../welcomePage/welcomePage.js';
import SecondPage from '../secondPage/secondPage.js';
import TaskPage from '../taskPage/taskPage.js';
import Heroes from '../heroes/heroes.js';

export default class FullPage extends Component {
  render(){

    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '0px',
      sectionPaddingBottom: '0px',
      arrowNavigation:      true
    };

    return(
      <div>
        <SectionsContainer {...options}>
          <Section><WelcomePage /></Section>
          <Section><Heroes /></Section>
          <Section><TaskPage /></Section>
        </SectionsContainer>
      </div>
    );
  }
}
