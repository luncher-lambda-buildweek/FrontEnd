import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Input, Title } from '../../globals/styles';
import { createSchool } from '../../actions/schools';
import routes from '../../consts/urls';

class AddSchoolForm extends React.Component {
  state = {
    newSchool: {
      schoolName: '',
      location: '',
      email: '',
      phoneNumber: '',
      fundsNeeded: '',
      currentFunds: '',
      schoolImg: '',
    },
    error: '',
  };

  handleChanges = e => {
    this.setState({
      newSchool: {
        ...this.state.newSchool,
        [e.target.name]: e.target.value,
      },
    });
  };

  addSchool = e => {
    e.preventDefault();
    const {
      schoolName,
      location,
      email,
      phoneNumber,
      fundsNeeded,
      currentFunds,
    } = this.state.newSchool;
    const notEmpty =
      schoolName.trim() &&
      location.trim() &&
      email.trim() &&
      phoneNumber.trim() &&
      fundsNeeded.trim() &&
      currentFunds.trim();
    if (notEmpty) {
      this.props.createSchool(this.state.newSchool).then(res => {
        if (res) {
          this.props.history.push(routes.home);
        }
      });
    } else {
      this.setState({ error: 'All Fields are Required' });
    }
  };

  render() {
    return (
      <div>
        <div>
          <Title>Create your school's profile</Title>
          <Form onSubmit={this.addSchool}>
            <Input
              name="schoolName"
              placeholder="School Name"
              required
              onChange={this.handleChanges}
              value={this.state.newSchool.schoolName}
            />
            <Input
              name="location"
              placeholder="City, State ex (Miami, FL)"
              required
              onChange={this.handleChanges}
              value={this.state.newSchool.location}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={this.handleChanges}
              value={this.state.newSchool.email}
            />
            <Input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              onChange={this.handleChanges}
              value={this.state.newSchool.phoneNumber}
            />
            <Input
              type="number"
              name="fundsNeeded"
              placeholder="Funds needed ex. (1000.00)"
              required
              onChange={this.handleChanges}
              value={this.state.newSchool.fundsNeeded}
            />
            <Input
              type="number"
              name="currentFunds"
              placeholder="Current funds ex. (10.00)"
              required
              onChange={this.handleChanges}
              value={this.state.newSchool.currentFunds}
            />
            <Input
              type="string"
              name="schoolImg"
              placeholder="Image URL"
              onChange={this.handleChanges}
              value={this.state.newSchool.schoolImg}
            />
            <Button>Add School</Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ schoolReducer }) => ({
  error: schoolReducer.error,
});

AddSchoolForm.propTypes = {
  error: PropTypes.string,
  createSchool: PropTypes.func,
};

export default connect(
  mapStateToProps,
  { createSchool },
)(AddSchoolForm);
