import React, { Component } from 'react';
import logo from './logo.svg';



export default class ClassComponent extends Component {
  render() {
    const { firstname, lastname, email } =this.props;
    return (
      <div>
     <p>{firstname}</p>
     <p>{lastname}</p>
     <p>{email}</p>
      </div>
    )
  };
}

