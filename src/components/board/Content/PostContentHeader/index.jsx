import React, { Component } from 'react';
import Title from './PostTitle/index';
import Control from './control';
import './styles.scss';


export default class PostContentHeader extends Component {
  render(){

    let { title } = this.props;

    return (
    <div className="contents__header">
        <Title title = { title }/>
        <Control />
    </div>
    )
  }
}
