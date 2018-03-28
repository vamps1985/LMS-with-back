import React from 'react';
import iconLikes from '@/components/board/Like.png';
import './styles.scss';

const LikeIcon = ({likes}) => {

    return (
        <div className="counter__likes">
            <img className="icon counter__icon icon--likes" src={iconLikes} alt=""/>
            <span className="counter__likes">{likes}</span>
            <span>Likes</span>
        </div>
    )
};

export default LikeIcon;
