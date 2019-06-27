import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, Modal } from 'semantic-ui-react';
import {
  SchoolsContainer,
  School,
  ImageContainer,
  SchoolDetail,
} from './schoolsStyle';
import { Title, MoneyIcon } from '../../globals/styles';
import { fetchSchools } from '../../actions/schools';
import defaultImg from '../../assets/school_default.jpg';
import routes from '../../consts/urls';
import { getToken } from '../../helpers/localStorage';
import Donate from '../Donate';
import { Wave } from 'react-preloading-component';



const DonateWithRouter = withRouter(Donate);

class Schools extends Component {
  componentDidMount() {
    this.props.fetchSchools();
  }

  goToDonate = () => {
    const isLoggedIn = getToken();
    if (!isLoggedIn) {
      return this.props.history.push(routes.login);
    }
  };

  render() {
    return (
      <div>
        <Title>Schools In Need</Title>
        <SchoolsContainer>
          {this.props.isLoading && <Wave />}
          {this.props.schools.map(school => (
            <School key={school.id}>
              <ImageContainer>
                <img
                  src={school.schoolImg ? school.schoolImg : defaultImg}
                  alt="school avatar"
                />
              </ImageContainer>
              <SchoolDetail>
                <h4>{school.schoolName}</h4>
                {school.location && (
                  <p>
                    Location: <span>{school.location}</span>
                  </p>
                )}
                {school.email && (
                  <p>
                    Email: <span>{school.email}</span>
                  </p>
                )}
                {school.fundsNeeded && (
                  <p>
                    Amount Needed: <span>{school.fundsNeeded} <MoneyIcon /></span>
                  </p>
                )}
                {school.currentFunds && (
                  <p>
                    Donations: <span>{school.currentFunds} <MoneyIcon /></span>
                  </p>
                )}
                <Modal
                  centered
                  closeIcon
                  trigger={<Button onClick={this.goToDonate}>Donate</Button>}
                >
                  <DonateWithRouter school={school} />
                </Modal>
              </SchoolDetail>
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
    error: schoolReducer.error,
    isLoading: schoolReducer.isLoading
  };
};

Schools.propTypes = {
  schools: PropTypes.arrayOf(PropTypes.object),
  fetchSchools: PropTypes.func,
  error: PropTypes.string,
};

export default connect(
  mapStateToProps,
  { fetchSchools },
)(Schools);
