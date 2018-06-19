/**
 * NPM import
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
/**
 * Local import
 */

import Header from 'src/components/Home/Header/Header';
import Intro from 'src/components/Home/Intro';
import Title from 'src/components/Home/Title';
import Footer from 'src/components/Home/Footer';
import CvBuilder from 'src/components/CvBuilder';
import PortfolioBuilder from 'src/containers/PortfolioBuilder';
import ProfileBuilder from 'src/components/ProfileBuilder';
import CvBlocsForm from 'src/components/CvBuilder/CvBlocsForm/CvBlocsForm';
import Collection from 'src/components/Test'
import CvUser from 'src/containers/CvUser';
import { firebase } from 'src/firebase';
/**
 * Code
 */
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <div>
        <div className="bars">
          <div className="bar bar-1" />
          <div className="bar bar-2" />
        </div>
        <Header authUser={this.state.authUser} />
        <Title />
        <Intro />
        <Footer />
      </div>
    );
  }
}

const App = () => (
  <div>
    <div id="app">
      <Route exact path="/" component={Home} />
      <Route path="/cvbuilder" component={CvBuilder} />
      <Route path="/portfoliobuilder" component={PortfolioBuilder} />
      <Route path="/profilebuilder" component={ProfileBuilder} />
      <Route path="/cvblocsform" component={CvBlocsForm} />
      <Route path="/testcv" component={CvUser} />
      <Route path="/Test" component={Collection} />
    </div>
  </div>

);
// Bricolage avec React-Router pour permettre de dev avec visu
//  A terme on reprendra l'architecture de base avec les routes d'Alex

/**
 * Export
 */
export default App;
