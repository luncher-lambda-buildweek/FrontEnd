import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn } from '../../actions/login';
import { Form, Button, Input, Title } from '../../globals/styles';
import routes from '../../consts/urls';
import { getToken } from '../../helpers/localStorage';
import { Pulse } from 'react-preloading-component';


class LogIn extends React.Component {
  state = {
    credentials: {
      email: '',
      password: '',
    },
  };

  componentDidMount() {
    const token = getToken();
    if (token) {
      this.props.history.push(routes.home);
    }
  }

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  
  login = e => {
    e.preventDefault();
    this.props.logIn(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push(routes.home);
      }
    });
  };

  render() {
    return (
      <div>
        <Title>Login</Title>
        <Form onSubmit={this.login}>
        <h3>{this.props.error}</h3>
          <Input
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={this.handleChanges}
            value={this.state.credentials.email}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChanges}
            value={this.state.credentials.password}
          />
          <Button disabled={this.props.loggingIn}>{this.props.loggingIn && <Pulse />}Log In!</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  error: loginReducer.error,
  loggingIn: loginReducer.loggingIn,
});

LogIn.propTypes = {
  error: PropTypes.string,
  loggingIn: PropTypes.bool,
  logIn: PropTypes.func,
};

export default connect(
  mapStateToProps,
  { logIn },
)(LogIn);
