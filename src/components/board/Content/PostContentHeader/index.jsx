import React, { Component } from 'react';
import Title from './PostTitle/index';
import Control from './control';
import './styles.scss';


export default class PostContentHeader extends Component {
  render(){
    return (
    <div className="contents__header">
        <Title />
        <Control />
    </div>
    )
  }
}
