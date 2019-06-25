import React from 'react';
import { Link } from 'react-router-dom';
import Schools from '../Schools';
import { Title, Alert } from '../../globals/styles';
import { HomeContainer } from './homeStyle';

const Home = props => {
  return (
    <div>
      <HomeContainer>
        <Title>Your School</Title>
        <Alert>
          You have not added any school <Link to="#">Add School</Link>
        </Alert>
      </HomeContainer>
      <Schools />
    </div>
  );
};

export default Home;
