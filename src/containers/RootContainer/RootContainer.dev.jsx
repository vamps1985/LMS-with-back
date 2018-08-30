import React from 'react';
import PropTypes from 'prop-types';
import { Route, Router } from 'react-router-dom';

import App from '@/components/App';
import MainPage from '@/containers/views/MainPage';

const propTypes = {
  history: PropTypes.object.isRequired,
  };

const RootContainer = ({history }) => (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
);

RootContainer.propTypes = propTypes;

export default RootContainer;
