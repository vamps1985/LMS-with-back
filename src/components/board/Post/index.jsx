import React, { Component } from 'react';
import User from '../user/index';
import Content from '../Content/';
import './styles.scss';


const Post = ({props, index}) => {

    const classPost = index % 2 ? "post" : "post post--middle-grey";
    return (

    <div className = {classPost}>
        <User name = {props.userName} role = {props.userRole}/>
    <Content {...props}/>
    </div>
    )
};


export default Post;
