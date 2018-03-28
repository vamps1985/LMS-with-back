import React, { Component } from 'react';
import CommentIcon from '../CommentsIcon';
import LikeIcon from '../LikesIcon';
import './styles.scss';

export default class Counter extends Component {
    render() {
        const {likes, comments} = this.props;
        const countComments = comments ? comments.length : 0;

        console.log("comments", countComments);
        return (
            <div className="counter">
                <LikeIcon likes={likes} />
                <CommentIcon  countComment = {countComments}/>
            </div>
        )
    }
}
