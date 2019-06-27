import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Schools from '../Schools';
import { HomeContainer } from './homeStyle';
import roles from '../../consts/roles';
import Admin from '../Admin';

const SchoolsWithRouter = withRouter(Schools);

const Home = props => {
  return (
    <HomeContainer>
      {props.role === roles.admin && <Admin />}
      <SchoolsWithRouter />
    </HomeContainer>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    role: loginReducer.role,
  };
};

Home.propTypes = {
  role: PropTypes.string,
};

export default connect(
  mapStateToProps,
  {},
)(Home);
