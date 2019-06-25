import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../helpers/localStorage';
import routes from '../../consts/urls';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = getToken();
      if (!currentUser) {
        return <Redirect to={routes.login} />;
      }

      return <Component {...props} />;
    }}
  />
);
