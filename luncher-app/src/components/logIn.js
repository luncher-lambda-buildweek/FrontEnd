import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/index';

class LogIn extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // login function commented out until a component has been created that the user will be routed to when log in is successful

  // login = e => {
  //   e.preventDefault();
  //   this.props.logIn(this.state.credentials)
  //   .then(res => {
  //     if (res) {
  //       this.props.history.push('/protectedRoute');
  //     }
  //   });
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type= 'text'
            name= 'username'
            placeholder= 'Username'
            onChange={this.handleChanges}
            value={this.state.credentials.username}
          />
          <input
            type= 'password'
            name= 'password'
            placeholder= 'password'
            onChange={this.handleChanges}
            value={this.state.credentials.password}
          />
          <button>Log In!</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
})

export default connect(mapStateToProps, { logIn } )(LogIn);