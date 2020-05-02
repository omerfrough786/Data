import React, { Component } from 'react';

export class Body extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center '>
        <input
          type='text' name='Header'
          onChange={this.props.changeHandler}
          placeholder='Header'
        />

        <input
          type='text' name='Footer'
          onChange={this.props.changeHandler}
          placeholder='Footer'
        />
      </div>
    );
  }
}

export default Body;
