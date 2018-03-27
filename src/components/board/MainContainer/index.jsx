import React, { Component } from 'react';
import Header from '@/components/board/Header';
import Addpost from '@/components/board/addPost';
import './styles.scss';

import PostList from "../PostList";

export default class MainContainer extends Component {
  render() {
    return (
        <div className="post-wrapper--middle-grey">
            <Header />

            <PostList />
        </div>
    );
  }
}
