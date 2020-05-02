import React, { Fragment, Component } from 'react';
import Header from './Header.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

import './App.css';

class Father extends Component {
  state = {
    Header: 'I am Header',
    Footer: 'I am Footer'
  };
  myDefinition = e => {
    this.setState({
      [e.target.name]:e.target.value
      
    });
  };


  render() {
    return (
      <Fragment className='App'>
        <Header titleHeader={this.state.Header} />
        <Body newValue={this.state.title} changeHandler={this.myDefinition}/>
        <Footer titleFooter={this.state.Footer}/>
      </Fragment>
    );
  }
}

export default Father;
