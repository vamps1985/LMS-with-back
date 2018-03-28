import React, { Component } from 'react';
import Header from '@/components/board/Header';
import Addpost from '@/components/board/addPost';
import './styles.scss';

import PostList from "../PostList";

export default class MainContainer extends Component {
    state = {
        posts: [],
    };
    componentDidMount() {
            fetch("http://localhost:3000/post")
                .then(response => {
                   if (response.ok) {
                       return response.json()
                   } else {
                       throw new Error('Error while fetching' + response.statusText)
                   }
                })
                .then(data => {
                    this.setState({
                    posts: data.reverse(),
                })
                })
                .catch( err => console.error(err))
        }
  render() {
     const { posts } = this.state;
    return (
        <div className="post-wrapper--middle-grey">
            <Header />


            <PostList posts = {posts} />

        </div>
    );
  }
}
