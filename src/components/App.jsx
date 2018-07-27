
import React, { Component } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Header from '@/components/Common/Header';
import MainContainer from '@/components/Common/MainContainer';


import '@/styles/theme.scss';
import '@/styles/_var.scss';

class App extends Component {
  constructor(props) {
    super(props)
}

// ButtonClick () {
//   this.setState({isopened: !this.state.isopened})
//   console.log(this.state)
// }

  render() {
    console.log(this.props);

    return (
            <div>

                <Header />
                <MainContainer />
            </div>

    );
  }
}

export default App;
