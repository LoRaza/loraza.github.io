/**
 * NPM import
 */
import React from 'react';
import { TransitionGroup, Transition } from 'react-transition-group';
import anime from 'animejs';
/**
 * Local import
 */
import Intro from 'src/components/Home/Intro';
// import Intro2 from 'src/components/Home/Intro2';

/**
 * Code
 */
class HomeIntro extends React.Component {
  state = {
    show: true,
    entered: false,
  };

  render() {
    const { show } = this.state;
    return (
      <Transition
        in={show}
        timeout={2000}
        unmontOnExit
      >
        <Intro />
      </Transition>
    );
  }
}

/**
 * Export
 */
export default HomeIntro;
