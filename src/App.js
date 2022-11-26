/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import './styles/style.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="fullApp">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
