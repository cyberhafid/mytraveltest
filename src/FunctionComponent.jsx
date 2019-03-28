import React, { Component } from 'react';
import logo from './logo.svg';



export default function FunctionComponent({title}) {
  console.log ('IN FUNCTION', this);
    return (
      <div>
    {title}
      </div>
    )
  }


