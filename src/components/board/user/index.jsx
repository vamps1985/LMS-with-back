import React, { Component } from 'react';
import './styles.scss';

 export default class User extends Component {
   constructor(props){
     super(props);
     this.state = {
       role: [],
       name: [],
     };
   }
   render() {
     return (
       <div className="user post__user">
         <a href="#" className="ava post-ava">
           <div className="ava post-ava__circle"></div>
           <div className="ava post-ava__semicircle"></div>
           <div className="ava post-ava__tooltip"></div>
         </a>
         <h4 className="user__name"> Petya </h4>
         <h4 className="user__role">Student</h4>
         <h4 className="user__to-chat">Перейти<br />к чату </h4>
       </div>
     );
   }
 }
