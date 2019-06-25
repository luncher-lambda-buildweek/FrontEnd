import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/signup';
import { Form, Button } from '../../globals/styles';

class SignUpForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
  };

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.signup({ ...this.state });
  };

  render() {
    const { firstName, lastName, email, password, role } = this.state;
    return (
      <div>
        <h2>Sign Up</h2>
        {!role ? (
          <div>
            <h3>Select Account Type:</h3>
            <Button onClick={this.inputHandler} name="role" value="admin">
              Sign up as Admin
            </Button>
            <Button onClick={this.inputHandler} name="role" value="donor">
              Sign up as Patron
            </Button>
          </div>
        ) : (
          <div>
            <h2>
              {role === 'donor'
                ? 'Create Patron Account'
                : 'Create a School Admin Account'}
            </h2>
            <Form onSubmit={this.submitHandler}>
              <input
                name="firstName"
                placeholder="Firstname"
                onChange={this.inputHandler}
                value={firstName}
              />
              <input
                name="lastName"
                placeholder="Lastname"
                onChange={this.inputHandler}
                value={lastName}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.inputHandler}
                value={email}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.inputHandler}
                value={password}
              />
              <Button>Create Account</Button>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  null,
  { signup },
)(SignUpForm);
