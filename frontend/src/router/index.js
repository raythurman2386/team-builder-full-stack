import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
import Dashboard from '../components/Dashboard/Dashboard';
import ProtectedRoute from '../utils/ProtectedRoute';
import InitiateReset from '../components/reset/InitiateReset';
import ValidateReset from '../components/reset/ValidateReset';

const Router = () => (
  <Switch>
    <Route exact path='/' component={SignIn} />
    <Route exact path='/login' component={SignIn} />
    <Route exact path='/register' component={Register} />
    <ProtectedRoute exact path='/dashboard' component={Dashboard} />
    <Route exact path='/start-reset' component={InitiateReset} />
    <ProtectedRoute path='/reset' component={ValidateReset} />
    {/* <ProtectedRoute exact path='/dashboard/tech/:id' component={Tech} /> */}
    {/* <ProtectedRoute exact path='/dashboard/job/id' component={Job} /> */}
  </Switch>
);

export default Router;
