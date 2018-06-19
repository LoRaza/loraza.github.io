/**
 * NPM import
 */
import React from 'react';
import classNames from 'classnames';
import { TweenLite, Expo } from 'gsap';
/**
 * Local import
 */
import Intro from 'src/components/Home/Intro';
import Intro2 from 'src/components/Home/Intro2';

/**
 * Code
 */
class HomeIntro extends React.Component {
  constructor() {
    super();
    this.loaderWrap = null;
    this.loaderTween = null;
  }
  state = ({
    introHide: true,
    hideShit: false
  });

  changeIntro(){
    setTimeout(() => {
      this.setState({
        introHide: false,
        hideShit: true,
      })
    }, 2600)
  }
  componentDidMount() {
    this.loaderTween = TweenLite.to(this.loaderWrap, 1, {
        x: "100%", ease: Expo.easeInOut, delay: 2, duration: 2
    });
    this.changeIntro();
  }


  render() {
    const introHide = classNames({ 'intro-hide': this.state.introHide });
    const hideShit = classNames({ 'hide-shit': this.state.hideShit });
    return (
      <div>
        <div className={introHide}>
          <Intro2 />
        </div>
        <div
          className={hideShit}
          ref={div => this.loaderWrap = div}
        >
          <Intro />
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default HomeIntro;
