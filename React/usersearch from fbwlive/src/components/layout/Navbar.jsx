import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {
  //defining a default props
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}></i>
          {title}
        </h1>
      </nav>
    );
}

Navbar.defaultProps = {
  title: 'User Search',
  icon: 'fab fa-github'
};

//defining a the type of my props
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};


export default Navbar;
