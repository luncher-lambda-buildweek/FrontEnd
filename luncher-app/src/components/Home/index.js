import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Schools from '../Schools';
import { Title, Alert } from '../../globals/styles';
import { HomeContainer } from './homeStyle';
import routes from '../../consts/urls';
import roles from '../../consts/roles';

const Home = props => {
  return (
    <HomeContainer>
      {props.role === roles.admin && (
        <React.Fragment>
          <Title>Your School</Title>
          <Alert>
            You have not added any school{' '}
            <Link to={routes.addSchool}>Add School</Link>
          </Alert>
        </React.Fragment>
      )}
      <Schools />
    </HomeContainer>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    role: loginReducer.role,
  };
};

export default connect(
  mapStateToProps,
  {},
)(Home);
