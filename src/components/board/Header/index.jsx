import React, { Component } from 'react';
import './styles.scss';
import Addpost from '@/components/board/addPost';



class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isopened: false
    }
  }

  ButtonClick () {
    this.setState({isopened: !this.state.isopened})
    console.log(this.state)
  }
  render() {
    let text1;

      if (this.state.isopened) {
        return (
          <div className="Header"  >
            <h1 className="Header__title">[ Что нового? _]</h1>
            <div className="Header__last-news">
              <h3 className="Header__text">[ Последние новости: ]</h3>
              <div className="icon-add" onClick={this.ButtonClick.bind(this)}/>

            </div>

            <Addpost />

          </div>
        );
      } else {
        return (
          <div className="Header"  >
            <h1 className="Header__title">[ Что нового? _]</h1>
            <div className="Header__last-news">
              <h3 className="Header__text">[ Последние новости: ]</h3>
              <div className="icon-add" onClick={this.ButtonClick.bind(this)}/>

            </div>



          </div>
        );

      }







} }

export default Header;
