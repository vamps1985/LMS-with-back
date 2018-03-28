import React from 'react';
import iconComment from '@/components/board/d-comments.png';
import '../../../../styles/theme.scss';
import './styles.scss';

const CommentIcon = ({countComment}) => {

    return (
    <div className="counter__comments">
        <img className="icon counter__icon icon--comment" src={iconComment} alt=""/>
        <span className="counter__comments">{countComment}</span>
        <span>Comments</span>
    </div>
)};
export default CommentIcon;