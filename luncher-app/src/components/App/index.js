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

class App extends Component {
  componentDidMount() {
    const token = getToken();
    if (token) {
      this.props.loggedIn();
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <MainContainer>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.login} component={LogIn} />
            <Route path={routes.signup} component={SignUp} />
            <Route path={routes.addSchool} component={AddSchoolForm} />
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
