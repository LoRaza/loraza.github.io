/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Header from 'src/components/Home/Header/Header';
import Intro from 'src/components/Home/Intro';
import Title from 'src/components/Home/Title';
import Footer from 'src/components/Home/Footer';

/**
 * Code
 */
const App = () => (
  <div>
    <div id="app">
      <div className="bars">
        <div className="bar bar-1" />
        <div className="bar bar-2" />
      </div>
      <Header />
      <Title />
      <Intro />
      <Footer />
    </div>
  </div>

);

/**
 * Export
 */
export default App;
