import React, { Component } from 'react';
import User from '../user/index';
import Content from '../Content/';
import './styles.scss';


const Post = () => (
    <div className="post">
      <User/>
      <Content />
    </div>
  );


export default Post;
