import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signup } from '../../actions/signup';
import { Form, Button, Input, Title } from '../../globals/styles';
import { RoleContainer } from './signupStyles';

class SignUpForm extends Component {
  state = {
    newUser: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: '',
    },
    error: '',
  };

  handleChanges = e => {
    this.setState({
      newUser: { ...this.state.newUser, [e.target.name]: e.target.value },
    });
  };

  signup = e => {
    e.preventDefault();
    const { firstName, lastName, email, password } = this.state.newUser;
    const notEmpty =
      firstName.trim() && lastName.trim() && email.trim() && password.trim();
    if (notEmpty) {
      this.props.signup({...this.state.newUser}).then(res => {
        console.log(res);
        if (res) {
          this.props.history.push('/login');
        }
      });
    } else {
      this.setState({ error: 'All Fields are Required' });
    }
  };

  render() {
    const { firstName, lastName, email, password, role } = this.state.newUser;
    return (
      <div>
        <Title>Sign Up</Title>
        {!role ? (
          <RoleContainer>
            <h3>Select Account Type:</h3>
            <Button onClick={this.handleChanges} name="role" value="school">
              Sign up as School Admin
            </Button>
            <Button onClick={this.handleChanges} name="role" value="donor">
              Sign up as Patron
            </Button>
          </RoleContainer>
        ) : (
          <div>
            <Title>
              {role === 'donor'
                ? 'Create Patron Account'
                : 'Create a School Admin Account'}
            </Title>
            <Form onSubmit={this.signup}>
              {this.props.error && <p>{this.props.error}</p>}
              <Input
                name="firstName"
                placeholder="Firstname"
                required
                onChange={this.handleChanges}
                value={firstName}
              />
              <Input
                name="lastName"
                placeholder="Lastname"
                required
                onChange={this.handleChanges}
                value={lastName}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={this.handleChanges}
                value={email}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={this.handleChanges}
                value={password}
              />

              {this.state.error && <p>{this.state.error}</p>}

              <Button>Create Account</Button>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ signupReducer }) => {
  return {
    error: signupReducer.error,
    signingUp: signupReducer.signingUp,
  };
};

SignUpForm.propTypes = {
  error: PropTypes.string,
  signingUp: PropTypes.bool,
  signup: PropTypes.func,
};

export default connect(
  mapStateToProps,
  { signup },
)(SignUpForm);
