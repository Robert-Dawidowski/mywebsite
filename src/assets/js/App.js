import React, { Component } from 'react';
import '../css/App.css';
import Top from '../js/header/header';
import About from '../js/content/about';
import Skills from "./content/skills";

class App extends Component {

  getElementOffset = (el) => {
      let rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  };

  render() {
    return (
      <div id='main-page' className='App'>
        <div className='container-fluid'>
          <Top/>
        </div>
        <div className='container'>
          <About getElementOffset={this.getElementOffset}/>
          <Skills getElementOffset={this.getElementOffset}/>
        </div>
      </div>
    );
  }
}

export default App;
