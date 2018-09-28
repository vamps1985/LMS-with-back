import React, { Component } from 'react';
import User from '../user';
import LikesIcon from '@/components/board/Content/LikesIcon';
import pensil from '@/components/board/pensil.png';
import './style.scss'

class Comment extends Component {

  render() {
    return (
    <div className="Comment">
    <User name={'Sveta'} role={'Student'}/>
      <div className="comment__contents">
        <div className="contents__header">
          <div className="date-stamp contents__date-stamp">
            <div className="date-stamp__date">24/12/2017</div>
            <div className="date-stamp__time">18:12</div>
          </div>
          <div className="contents__control">
            <div className="control__edit">
              <img src={pensil} alt="pensil" />
              <span className="delete control__delete">&#10005;</span>
          </div>
            </div>
          </div>
          <p className="contents__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero sunt corporis eveniet laborum, quae consequatur esse numquam tempora dolorem modi culpa illo dicta voluptates ut eligendi accusamus molestias eos, dolorum ipsam nam repellat et? Molestiae aut eligendi odio placeat tempora.</p>
          <div className="counter">
            <LikesIcon />
              </div>
            </div>
        </div>
        );
    }

}

export default Comment;
