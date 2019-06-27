import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Pulse, Pop } from 'react-preloading-component';
import { Form, Button, Input, Title, Alert } from '../../globals/styles';
import { createSchool, getSchool, updateSchool } from '../../actions/schools';
import routes from '../../consts/urls';
import uploadImage from '../../helpers/cloudinary';
import { AvatarContainer } from '../Donate/donateStyle';

class SchoolForm extends React.Component {
  state = {
    newSchool: {
      schoolName: '',
      location: '',
      email: '',
      phoneNumber: '',
      fundsNeeded: '',
      currentFunds: 0,
      schoolImg: '',
    },
    uploadingImage: false,
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
      this.state.newSchool.fundsNeeded;

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

  onNumberChange = event => {
    const name = event.target.name;
    const number = event.target.value;
    if (!number || number.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({
        newSchool: {
          ...this.state.newSchool,
          [name]: number,
        },
      });
    }
  };

  handleImageUpload = e => {
    this.setState({ uploadingImage: true });
    const file = e.target.files[0];
    uploadImage(file).then(res => {
      if (res) {
        this.setState(prevState => ({
          ...prevState,
          newSchool: { ...prevState.newSchool, schoolImg: res },
        }));
        this.setState({ uploadingImage: false });
      }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    const { newSchool, id, isEdit } = this.state;
    const notEmpty = this.validateInput();
    if (notEmpty) {
      !isEdit
        ? this.props
            .createSchool({ ...newSchool })
            .then(res => this.goHome(res))
        : this.props
            .updateSchool({ ...newSchool }, id)
            .then(res => this.goHome(res));
    } else {
      this.setState({ error: 'All Fields are Required' });
    }
  };

  render() {
    const { isEdit, newSchool, uploadingImage } = this.state;
    const buttonText = isEdit ? 'Save Changes' : 'Add School';
    return (
      <div>
        <div>
          <Title>{isEdit ? 'Update' : 'Create'} your school's profile</Title>
          <Form onSubmit={this.submitHandler}>
            {this.props.error && <Alert>{this.props.error}</Alert>}
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
              name="phoneNumber"
              placeholder="Phone Number"
              required
              onChange={this.onNumberChange}
              value={this.state.newSchool.phoneNumber}
            />
            <Input
              name="fundsNeeded"
              placeholder="Funds needed ex. (1000.00)"
              required
              onChange={this.onNumberChange}
              value={this.state.newSchool.fundsNeeded}
            />
            {uploadingImage ? (
              <Pulse />
            ) : (
              newSchool.schoolImg && (
                <AvatarContainer>
                  <img src={newSchool.schoolImg} alt="uploaded avatar" />
                </AvatarContainer>
              )
            )}
            <Input type="file" onChange={this.handleImageUpload} />
            <Button disabled={uploadingImage}>
              {this.props.isSubmitting ? <Pop /> : buttonText}
            </Button>
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
    isSubmitting: schoolReducer.isLoading,
  };
};

SchoolForm.propTypes = {
  error: PropTypes.string,
  createSchool: PropTypes.func,
  isSubmitting: PropTypes.bool,
};

export default connect(
  mapStateToProps,
  { createSchool, getSchool, updateSchool },
)(SchoolForm);
