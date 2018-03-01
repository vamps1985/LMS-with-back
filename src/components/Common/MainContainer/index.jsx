import React from 'react';
import routes from '@/routes';
import LeftNav from '@/components/Common/LeftNav'


import './styles.scss';

export default class MainContainer extends React.Component {
  render() {
    return (
      <div className='wrapper wrapper--light-gray'>
        <div className="container">
          <div className="content">
            <LeftNav/>
            <main className="main">
              {routes}
            </main>
          </div>
        </div>
      </div>
    );
  }
}
