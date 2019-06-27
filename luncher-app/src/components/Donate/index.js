import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Pulse } from 'react-preloading-component';
import { Button, Modal } from 'semantic-ui-react';
import { donate, fetchSchools } from '../../actions/schools';
import defaultImg from '../../assets/school_default.jpg';
import {
  DonateContainer,
  DonateDescription,
  AvatarContainer,
} from './donateStyle';
import { Title, Alert } from '../../globals/styles';

class Donate extends Component {
  state = {
    amount: 0,
    message: '',
  };

  submitHandler = (event, id) => {
    event.preventDefault();
    if (this.state.amount > 0) {
      this.props.donate(id, this.state.amount).then(res => {
        if (res) {
          this.setState({ message: 'Thanks for your Donation' });
          this.props.fetchSchools();
        }
      });
    }
  };

  onAmountChange = event => {
    const amount = event.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };

  render() {
    const { id, schoolName, schoolImg } = this.props.school;
    return (
      <React.Fragment>
        <Modal.Header>Make Donation</Modal.Header>
        <DonateContainer>
          <AvatarContainer>
            <img src={schoolImg ? schoolImg : defaultImg} alt="school avatar" />
          </AvatarContainer>
          <DonateDescription>
            <Title>{schoolName}</Title>
            {this.props.error && <Alert>Error making your donation, Please Try Again!!</Alert>}
            {!this.state.message ? (
              <form onSubmit={event => this.submitHandler(event, id)}>
                <input
                  value={this.state.amount}
                  onChange={this.onAmountChange}
                  placeholder="Amount"
                />
                <Button type="submit">
                  {this.props.isDonating ? <Pulse /> : 'Add my Donation'}
                </Button>
              </form>
            ) : (
              <Alert>{this.state.message}</Alert>
            )}
          </DonateDescription>
        </DonateContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ schoolReducer }) => {
  return {
    isDonating: schoolReducer.isLoading,
    error: schoolReducer.error
  };
};

Donate.propTypes = {
  school: PropTypes.object,
  isDonating: PropTypes.bool,
  donate: PropTypes.func,
  fetchSchools: PropTypes.func,
  error: PropTypes.string,
};

export default connect(
  mapStateToProps,
  { donate, fetchSchools },
)(Donate);
