import React, { Component } from 'react';
import CommentIcon from '../CommentsIcon';
import LikeIcon from '../LikesIcon';
import './styles.scss';

export default class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <LikeIcon />
                <CommentIcon />
            </div>
        )
    }
}
