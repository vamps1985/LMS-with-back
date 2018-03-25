import React, { Component } from 'react';
import PostContentHeader from './PostContentHeader/';
import DateStamp from './DateStamp';
import ContentText from './ContentText';
import Counter from './Counter';
import Pointer from './Pointer';
import './styles.scss';



export default class Content extends Component {
  render() {
    return (
      <div className="contents post-contents">
        <PostContentHeader />
        <DateStamp />
        <ContentText />
        <Counter />
          <Pointer />
      </div>
    );
  }
}
