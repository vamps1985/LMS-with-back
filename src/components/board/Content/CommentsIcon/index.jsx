import React from 'react';
import iconComment from '@/components/board/d-comments.png';
import '../../../../styles/theme.scss';
import './styles.scss';

const CommentIcon = () => (
    <div className="counter__comments">
        <img className="icon counter__icon icon--comment" src={iconComment} alt=""/>
        <span className="counter__comments">0</span>
        <span>Comments</span>
    </div>
);
export default CommentIcon;