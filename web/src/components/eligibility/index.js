import React from 'react';
import { connect } from 'react-redux';
import { Eligibility as actions } from '../../actions';

class Eligibility extends React.Component {
  render() {
    let target = this.props.user;
    if(this.props.params && this.props.params.participantID) {
      target = this.props.participants.find(participant => participant.id === this.props.params.participantID);
      return (
        <div>{target.realName} is {target.eligible ? '' : 'not'} eligible.</div>
      );
    } else if (this.props.user) {
      return (
        <div>You&lsquo;re {target.eligible ? '' : 'not currently'} eligible for Medicaid services</div>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    participants: state.participants
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEligibilityForParticipant(participantID) {
      dispatch(actions.getEligibilityForParticipant(participantID));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Eligibility);
