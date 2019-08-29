import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const { name } = this.props
    return (
      <div>
        <div>Navbar</div>
        <div>{name}</div>
      </div>

    )
  }
}

