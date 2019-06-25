import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import Header from '../Header';
import { MainContainer } from './appStyle';
import Home from '../Home';
import AddSchoolForm from '../Addschool/index';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <MainContainer>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={SignUp} />
          <Route path="/addSchool" component={AddSchoolForm} />
        </MainContainer>
      </div>
    </Router>
  );
};

export default App;
