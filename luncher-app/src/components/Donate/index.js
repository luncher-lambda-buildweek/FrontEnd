import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
            {!this.state.message ? (
              <form onSubmit={event => this.submitHandler(event, id)}>
                <input
                  value={this.state.amount}
                  onChange={this.onAmountChange}
                  placeholder="Amount"
                />
                <Button type="submit">Add my Donation</Button>
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

Donate.propTypes = {
  school: PropTypes.object,
};

export default connect(
  null,
  { donate, fetchSchools },
)(Donate);
