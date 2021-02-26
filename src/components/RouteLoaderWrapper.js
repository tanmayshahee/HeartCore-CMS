import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Content from '../pages/Content';

const RouteLoaderWrapper = withRouter(({ location }) => (
  <Switch location={location}>
    <Route path='/content' component={Content} />
  </Switch>
));

export default RouteLoaderWrapper;
