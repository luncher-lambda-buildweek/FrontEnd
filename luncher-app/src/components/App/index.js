import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import Header from '../Header';
import { MainContainer } from './appStyle';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <MainContainer>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={SignUp} />
        </MainContainer>
      </div>
    </Router>
  );
};

export default App;
