import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { SchoolsContainer, School } from './schoolsStyle';
import { Title } from '../../globals/styles';
import { fetchSchools } from '../../actions/schools';

class Schools extends Component {

  componentDidMount() {
    // this.props.fetchSchools();
  }

  render() {
    return (
      <div>
        <Title>Schools In Need</Title>
        <SchoolsContainer>
          {this.props.schools.map(school => (
            <School key={school.id}>
              <h4>{school.schoolName}</h4>
              <p>
                Location: {school.state}, {school.country}
              </p>
              <p>Email: {school.contact}</p>
              <p>Amount Needed: {school.fundsNeeded}</p>
              <button>Donate</button>
            </School>
          ))}
        </SchoolsContainer>
      </div>
    );
  }
}

const mapStateToProps = ({ schoolReducer }) => {
  return {
    schools: schoolReducer.schools,
    error: schoolReducer.error
  }
}

Schools.propTypes = {
  schools: PropTypes.arrayOf(PropTypes.object),
  fetchSchools: PropTypes.func,
  error: PropTypes.string
}

export default connect(
  mapStateToProps,
  { fetchSchools },
)(Schools);
