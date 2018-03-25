import React, { Component } from 'react';
import Post from "../Post";

export default class PostList extends Component {
    state = {
        posts: []
    };
    componentWillMount() {
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
                posts: data
            });
            })
            .catch( err => console.error(err))
    }
    render() {
        const {posts} = this.state;
        return (
            <div className="post-list">
                <Post items={posts}/>
            </div>
        )
    }
}
