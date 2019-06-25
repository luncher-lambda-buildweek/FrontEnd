import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LogIn from '../logIn';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <ul>
          <li>
            <Link to='/login'>Log-In</Link>
          </li>
          <li>
            <Link to='/register'>Sign Up</Link>
          </li>
        </ul>
        <Route path="/login" component={LogIn} />
        {/* <Route path="/" component={} /> */}
        {/* ^ Left route path and component empty so you can choose the name you prefer for sign up component */}
      </div>
    </Router>
  );
}

export default App;
