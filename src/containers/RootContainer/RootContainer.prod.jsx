import React from 'react';
import PropTypes from 'prop-types';
import { Route, Router } from 'react-router-dom';

import App from '@/components/App';
import MainPage from '@/components/main/main';

const propTypes = {
  history: PropTypes.object.isRequired,
  };

const RootContainer = ({history }) => (
    <Router history={history}>
      <Route path="/" component={MainPage} />
    </Router>
);

RootContainer.propTypes = propTypes;

export default RootContainer;
