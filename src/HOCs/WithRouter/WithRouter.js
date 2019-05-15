import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const WithRoute = route => Wrapped => props => (
  <Route path={route.path} exact={route.exact} component={Wrapped} {...props} />
);

export const WithSwitch = wrapped => props => (
  <Switch>
    {wrapped.map(Wrapped => (
      <Wrapped {...props} />
    ))}
  </Switch>
);
