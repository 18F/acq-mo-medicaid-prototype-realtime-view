import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { DCN } from '../../actions';

import ClientDetail from './clientDetails';
import CurrentPeriod from './currentPeriod';
import PaymentHistory from './paymentHistory';

function spenddown(props) {
  if (props.dcn === '0') {
    props.lookupDCN(props.params.dcn);
    return null;
  }

  return (
    <div className="spenddown">
      <ClientDetail {...props.people} />

      <div className="blue box">
        <h6>Eligibility status</h6>
        <strong>{props.eligibility}</strong>

        <h6>Coverage status</h6>
        <strong>{props.coverage}</strong>
      </div>

      <CurrentPeriod {...props.spenddown} />

      <PaymentHistory payments={props.spenddown.paymentHistory} />
    </div>
  );
}

spenddown.propTypes = {
  dcn: React.PropTypes.string.isRequired,
  people: React.PropTypes.shape(ClientDetail.propTypes).isRequired,
  eligibility: React.PropTypes.string.isRequired,
  coverage: React.PropTypes.string.isRequired,
  spenddown: React.PropTypes.shape({
    ...CurrentPeriod.propTypes,
    paymentHistory: PaymentHistory.propTypes.payments
  }).isRequired,
  params: React.PropTypes.shape({
    dcn: React.PropTypes.string.isRequired
  }).isRequired,
  lookupDCN: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const defaultProps = {
    dcn: '0',
    people: {
      primary: '',
      others: null,
      address: [],
      phone: ''
    },
    coverage: '',
    eligibility: '',
    spenddown: {
      monthlyAmount: 0,
      owed: 0,
      contributions: [],
      paymentHistory: []
    }
  };
  return state.spenddown || defaultProps;
}

function mapDispatchToProps(dispatch) {
  return {
    lookupDCN(dcn) {
      dispatch(DCN.checkDCN(dcn));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(spenddown));
