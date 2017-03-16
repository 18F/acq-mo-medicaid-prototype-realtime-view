import React from 'react';
import { connect } from 'react-redux';
import { DCN } from '../actions';

class DCNLookup extends React.Component {
  constructor() {
    super();

    this.state = {
      clientDCN: ''
    };

    this.lookupDcn = this.lookupDcn.bind(this);
    this.dcnChange = this.dcnChange.bind(this);
  }

  lookupDcn() {
    this.props.lookupDCN(this.state.clientDCN);
  }

  dcnChange(e) {
    this.setState({
      clientDCN: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Find a client</h1>
        <div className={this.props.clientError ? 'usa-input-error' : ''}>
          <label htmlFor="dcn-lookup-number">Department Client Number (DCN)</label>
          <span className="usa-input-error-message" role="alert">{this.props.clientError}</span>
          <input type="text" id="dcn-lookup-number" value={this.state.clientDCN} onChange={this.dcnChange} />
        </div>
        <button onClick={this.lookupDcn}>Find client</button>
      </div>
    );
  }
}

DCNLookup.propTypes = {
  lookupDCN: React.PropTypes.func.isRequired,
  clientError: React.PropTypes.string
};

DCNLookup.defaultProps = {
  clientError: ''
};

function mapStateToProps(state) {
  return {
    clientError: state.dcn.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    lookupDCN(dcn) {
      dispatch(DCN.checkDCN(dcn));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DCNLookup);
