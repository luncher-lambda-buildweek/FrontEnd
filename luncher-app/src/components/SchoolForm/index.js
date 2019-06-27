import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Button, Input, Title } from '../../globals/styles';
import { createSchool, getSchool, updateSchool } from '../../actions/schools';
import routes from '../../consts/urls';

class SchoolForm extends React.Component {
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
    isEdit: false,
    id: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.setState({ isEdit: true, id });
      this.props.getSchool(id).then(res => {
        if (res) {
          this.setState({ newSchool: { ...this.props.school } });
        }
      });
    }
  }

  goHome = res => {
    if (res) {
      this.props.history.push(routes.home);
    }
  };

  validateInput = () => {
    const validate =
      this.state.newSchool.schoolName.trim() &&
      this.state.newSchool.location.trim() &&
      this.state.newSchool.email.trim() &&
      this.state.newSchool.phoneNumber &&
      this.state.newSchool.fundsNeeded &&
      this.state.newSchool.currentFunds;

    return validate;
  };

  handleChanges = e => {
    this.setState({
      newSchool: {
        ...this.state.newSchool,
        [e.target.name]: e.target.value,
      },
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const { newSchool, id, isEdit } = this.state;
    const notEmpty = this.validateInput();
    if (notEmpty) {
      !isEdit
        ? this.props.createSchool(newSchool).then(res => this.goHome(res))
        : this.props.updateSchool(newSchool, id).then(res => this.goHome(res));
    } else {
      this.setState({ error: 'All Fields are Required' });
    }
  };

  render() {
    const { isEdit } = this.state;
    return (
      <div>
        <div>
          <Title>{isEdit ? 'Update' : 'Create'} your school's profile</Title>
          <Form onSubmit={this.submitHandler}>
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
            <Button>{isEdit ? 'Save Changes' : 'Add School'}</Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ schoolReducer }) => {
  return {
    error: schoolReducer.error,
    school: schoolReducer.school,
  };
};

SchoolForm.propTypes = {
  error: PropTypes.string,
  createSchool: PropTypes.func,
};

export default connect(
  mapStateToProps,
  { createSchool, getSchool, updateSchool },
)(SchoolForm);
