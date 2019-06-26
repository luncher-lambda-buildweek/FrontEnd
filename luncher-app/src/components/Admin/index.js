import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Title, Alert } from '../../globals/styles';
import routes from '../../consts/urls';
import {
  SchoolDisplay,
  SchoolDisplayDetails,
  SchoolImage,
  Header,
} from './adminStyle';
import defaultImg from '../../assets/school_default.jpg';
import { ImageContainer } from '../Schools/schoolsStyle';

class Admin extends Component {
  render() {
    const { adminSchool } = this.props;
    return (
      <div>
        <Title>Your School</Title>
        {!adminSchool ? (
          <React.Fragment>
            <Alert>
              You have not added any school{' '}
              <Link to={routes.addSchool}>Add School</Link>
            </Alert>
          </React.Fragment>
        ) : (
          <SchoolDisplay>
            <SchoolDisplayDetails>
              <Header>
                <h3>{adminSchool.schoolName}</h3>
                <div>
                  <FaEdit />
                  <FaTrash />
                </div>
              </Header>
              {adminSchool.location && (
                <p>
                  Location: <span>{adminSchool.location}</span>
                </p>
              )}
              {adminSchool.email && (
                <p>
                  Email: <span>{adminSchool.email}</span>
                </p>
              )}
              {adminSchool.fundsNeeded && (
                <p>
                  Amount Needed: <span>{adminSchool.fundsNeeded}</span>
                </p>
              )}
              <p>
                Current Funds:{' '}
                <span>
                  {adminSchool.currentFunds ? adminSchool.currentFunds : 0}
                </span>
              </p>
            </SchoolDisplayDetails>
            <SchoolImage>
              <ImageContainer>
                <img
                  src={
                    adminSchool.schoolImg ? adminSchool.schoolImg : defaultImg
                  }
                  alt="school avatar"
                />
              </ImageContainer>
            </SchoolImage>
          </SchoolDisplay>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ schoolReducer, loginReducer }) => {
  // Loop through array and get school associated with user by id
  const adminSchool = schoolReducer.schools.find(
    school => loginReducer.id === school.user_id,
  );
  return {
    adminSchool,
  };
};

Admin.propTypes = {
  adminSchool: PropTypes.shape({
    currentFunds: PropTypes.number,
    email: PropTypes.string,
    fundsNeeded: PropTypes.number,
    id: PropTypes.number,
    location: PropTypes.string,
    phoneNumber: PropTypes.number,
    schoolImg: PropTypes.string,
    schoolName: PropTypes.string,
    user_id: PropTypes.number,
  }),
};

export default connect(
  mapStateToProps,
  {},
)(Admin);
