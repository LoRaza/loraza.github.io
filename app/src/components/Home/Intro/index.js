/**
 * NPM import
 */
import React from 'react';
import classNames from 'classnames';
/**
 * Local import
 */


/**
 * Code
 */

class Intro extends React.Component {
  state = ({
    elem1: false,
    elem2: false,
    elem3: false,
  });
// Gros bricolage de rush de fin xD
// Il y a clairement mieux mais là je fais ce qui me passe par la tete
  componentDidMount() {
    this.blocAppear1();
    this.blocAppear2();
    this.blocAppear3();
  }

  blocAppear1() {
    setTimeout(() => {
      this.setState({
        elem1: true,
      })
    }, 1200)
  }
  blocAppear2() {
    setTimeout(() => {
      this.setState({
        elem2: true,
      })
    }, 2400)
  }
  blocAppear3() {
    setTimeout(() => {
      this.setState({
        elem3: true,
      })
    }, 3600)
  }

  render() {
    const appear1 = classNames('box-intro-element', 'create-intro', { 'appear-bloc': this.state.elem1 });
    const appear2 = classNames('box-intro-element', 'share-intro', { 'appear-bloc': this.state.elem2 });
    const appear3 = classNames('box-intro-element', 'discover-intro', { 'appear-bloc': this.state.elem3 });
    return (
      <div id="intro">
        <div className={appear1}>
          <div className="intro-element" >
            <img className="intro-element-create-pic" src="https://image.ibb.co/mjKTVy/home_create.png" alt="" />
          </div>
          <p className="intro-element-title">Create</p>
        </div>
        <div className={appear2}>
          <div className="intro-element blue">
            <img className="intro-element-share-pic" src="https://image.ibb.co/dkDoVy/home_share.png" alt="" />
          </div>
          <p className="intro-element-title">Share</p>
        </div>
        <div className={appear3}>
          <div className="intro-element">
            <img className="intro-element-discover-pic" src="https://image.ibb.co/jwKcsd/home_discover.png" alt="" />
          </div>
          <p className="intro-element-title">Discover</p>
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default Intro;
