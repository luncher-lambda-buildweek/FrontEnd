import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import Header from '../Header';
import {  AppContainer, MainContainer } from './appStyle';
import Home from '../Home';
import SchoolForm from '../SchoolForm';
import routes from '../../consts/urls';
import { loggedIn } from '../../actions/login';
import { getToken } from '../../helpers/localStorage';
import { PrivateRoute } from '../PrivateRoute';
import { decodeToken } from '../../helpers/tokenHelper';

class App extends Component {
  componentDidMount() {
    const token = getToken();
    if (token) {
      const user = decodeToken(token);
      this.props.loggedIn(user);
    }
  }

  render() {
    return (
      <Router>

          <AppContainer>
            <Header />
            <MainContainer />
            <Route path={routes.login} component={LogIn} />
            <Route path={routes.signup} component={SignUp} />
            <Route exact path={routes.home} component={Home} />
            <PrivateRoute path={routes.addSchool} component={SchoolForm} />
            <PrivateRoute path={`${routes.editSchool}/:id`} component={SchoolForm} />
            <MainContainer />
          </AppContainer>
      
      </Router>
    );
  }
}

export default connect(
  null,
  { loggedIn },
)(App);
