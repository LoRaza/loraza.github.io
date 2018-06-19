/**
 * NPM import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
/**
 * Local import
 */


/**
 * Code
 */


class Intro2 extends React.Component {
  state = {
    cv: false,
    portfolio: false,
  }

  mouseEnterPortfolio = () => {
    this.setState({
      cv: false,
      portfolio: true,
    });
  }

  mouseLeavePortfolio = () => {
    this.setState({
      cv: false,
      portfolio: false,
    });
  }

  mouseEnterCv = () => {
    this.setState({
      cv: true,
      portfolio: false,
    });
  }

  mouseLeaveCv = () => {
    this.setState({
      cv: false,
      portfolio: false,
    });
  }

  render() {
    const changeTitle = classNames('home-choice', {
      'title-portfolio': this.state.portfolio,
      'title-cv': this.state.cv,
    });
    return (
      <div id="intro">
        <div className="box-intro-element create">
          <NavLink className="link-home" exact to="/testCV" onMouseEnter={this.mouseEnterCv} onMouseLeave={this.mouseLeaveCv}>
            <div className="intro-element">
              <img className="intro-element-create-pic" src="https://image.ibb.co/bUVctJ/home_cv.png" alt="" />
            </div>
            <p className="intro-element-title">CV</p>
          </NavLink>
        </div>
        <div className="box-intro-element choice">
          <h3 className={changeTitle}>Start Building</h3>
        </div>
        <div className="box-intro-element discover" onMouseEnter={this.mouseEnterPortfolio} onMouseLeave={this.mouseLeavePortfolio}>
          <div className="intro-element">
            <img className="intro-element-discover-pic" src="https://image.ibb.co/eyp97d/home_portfolio.png" alt="" />
          </div>
          <p className="intro-element-title">Portfolio</p>
        </div>
      </div>
    );
  }
}


/**
 * Export
 */
export default Intro2;
