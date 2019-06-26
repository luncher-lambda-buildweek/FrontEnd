import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../../helpers/localStorage';
import routes from '../../consts/urls';
import { decodeToken } from '../../helpers/tokenHelper';
import roles from '../../consts/roles';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const currentUser = getToken();
      const user = decodeToken(currentUser);
      if (!currentUser) {
        return <Redirect to={routes.login} />;
      } else {
        if (user.role !== roles.admin) {
          return <Redirect to={routes.home}/>;
        }
      }

      return <Component {...props} />;
    }}
  />
);
