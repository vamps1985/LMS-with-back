
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProfilePage from '@/containers/views/ProfilePage';
import EditProfile from '@/components/ProfileEditor';
import CalendarPage from '@/containers/views/CalendarPage';
import BoardPage from '@/containers/views/BoardPage';
import HomeworkPage from '@/containers/views/HomeworkPage';
import TestPage from '@/containers/views/TestPage';
import TheoryPage from '@/containers/views/TheoryPage';


export default (
  <Switch>
    <Route exact path="/" component={EditProfile} />
    <Route exact path="/calendar" component={CalendarPage} />
    <Route exact path="/board" component={BoardPage} />
    <Route exact path="/homework" component={HomeworkPage} />
    <Route exact path="/test" component={TestPage} />
    <Route exact path="/theory" component={TheoryPage} />
    <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
  </Switch>
);

