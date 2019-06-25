import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn } from '../../actions/login';
import { Form, Button, Input } from '../../globals/styles';

class LogIn extends React.Component {
  state = {
    credentials: {
      email: '',
      password: '',
    },
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  // login function commented out until a component has been created that the user will be routed to when log in is successful

  login = e => {
    e.preventDefault();
    this.props.logIn(this.state.credentials)
    .then(res => {
      // if (res) {
      //   this.props.history.push('/protectedRoute');
      // }
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.login}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChanges}
            value={this.state.credentials.username}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChanges}
            value={this.state.credentials.password}
          />
          <Button>Log In!</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn,
});

LogIn.propTypes = {
  error: PropTypes.string,
  loggingIn: PropTypes.bool,
  logIn: PropTypes.func
}

export default connect(
  mapStateToProps,
  { logIn },
)(LogIn);
