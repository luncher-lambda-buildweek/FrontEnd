import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import Header from '../Header';
import { MainContainer } from './appStyle';
import Home from '../Home';
import AddSchoolForm from '../Addschool/index';
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
        <div>
          <Header />
          <MainContainer>
            <Route path={routes.login} component={LogIn} />
            <Route path={routes.signup} component={SignUp} />
            <Route exact path={routes.home} component={Home} />
            <PrivateRoute path={routes.addSchool} component={AddSchoolForm} />
          </MainContainer>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { loggedIn },
)(App);
