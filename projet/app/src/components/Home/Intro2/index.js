/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */


/**
 * Code
 */


class Intro2 extends React.Component {
  state = {
    color: '#fff',
    paddingRight: '.5em',
  }

  mouseEnter() {
    this.setState({
      color: '#eb5d61',
      paddingRight: '-2em',
    });
  }

  mouseLeave() {
    this.setState({
      color: '#fff',
      paddingRight: '.5em',
    });
  }

  render() {
    return (
      <div id="intro">
        <div className="box-intro-element create">
          <div className="intro-element">
            <img className="intro-element-create-pic" src="https://image.ibb.co/bUVctJ/home_cv.png" alt="" />
          </div>
          <p className="intro-element-title">CV</p>
        </div>
        <div className="box-intro-element choice">
          <h3 className="home-choice" style={{ color: this.state.color, paddingRight: this.state.paddingRight }}>Start Building</h3>
        </div>
        <div className="box-intro-element discover" onClick={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <div className="intro-element blue">
            <img className="intro-element-discover-pic" src="https://image.ibb.co/eyp97d/home_portfolio.png" alt="" />
          </div>
          <p className="intro-element-title title-blue">Portfolio</p>
        </div>
      </div>
    );
  }
}


/**
 * Export
 */
export default Intro2;
