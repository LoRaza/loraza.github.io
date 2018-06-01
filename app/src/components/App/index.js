/**
 * NPM import
 */
import React from 'react';
import { Route } from 'react-router-dom';
/**
 * Local import
 */

import Header from 'src/components/Home/Header/Header';
import Intro2 from 'src/components/Home/Intro2';
import Title from 'src/components/Home/Title';
import Footer from 'src/components/Home/Footer';
import CvBuilder from 'src/components/CvBuilder';
import PortfolioBuilder from 'src/components/PortfolioBuilder';
import ProfileBuilder from 'src/components/ProfileBuilder';
import CvBlocsForm from 'src/components/CvBuilder/CvBlocsForm/CvBlocsForm';
/**
 * Code
 */
const Home = () => (
  <div>
    <div className="bars">
      <div className="bar bar-1" />
      <div className="bar bar-2" />
    </div>
    <Header />
    <Title />
    <Intro2 />
    <Footer />
  </div>
);

const App = () => (
  <div>
    <div id="app">
      <Route exact path="/" component={Home} />
      <Route path="/cvbuilder" component={CvBuilder} />
      <Route path="/portfoliobuilder" component={PortfolioBuilder} />
      <Route path="/profilebuilder" component={ProfileBuilder} />
      <Route path="/cvblocsform" component={CvBlocsForm} />
    </div>
  </div>

);
// Bricolage avec React-Router pour permettre de dev avec visu
//  A terme on reprendra l'architecture de base avec les routes d'Alex

/**
 * Export
 */
export default App;
