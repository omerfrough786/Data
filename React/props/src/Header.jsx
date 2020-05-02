import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='bg-dark text-white mb-5 d-flex justify-content-center'>
        <h1 className='ml-5'>{this.props.titleHeader}</h1>
      </header>
    );
  }
}

export default Header;
