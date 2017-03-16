import React from 'react';
import Dollars from '../dollars';

function getContributions(contributions) {
  return contributions.map((contribution) => {
    let to = null;
    if (contribution.to) {
      to = <span> - {contribution.to}</span>;
    }
    return (
      <div key={`spenddown-currentperiod | ${contribution.amount} | ${contribution.status} | ${contribution.to}`}>
        <Dollars value={contribution.amount} /> ({contribution.status}){to}
      </div>
    );
  });
}

export default function currentPeriod(props) {
  return (
    <div className="box">
      <h3>Current period</h3>

      <h6>Monthly spend down amount</h6>
      <Dollars className="big" value={props.monthlyAmount} />

      <h6>Contributions so far</h6>
      {getContributions(props.contributions)}

      <h6>Remaining amount owed</h6>
      <Dollars className="big" value={props.owed} />
    </div>
  );
}

currentPeriod.propTypes = {
  monthlyAmount: React.PropTypes.number.isRequired,
  owed: React.PropTypes.number.isRequired,
  contributions: React.PropTypes.arrayOf(React.PropTypes.shape({
    amount: React.PropTypes.number.isRequired,
    status: React.PropTypes.oneOf(['paid', 'unpaid', 'direct']).isRequired,
    to: React.PropTypes.string
  }))
};

currentPeriod.defaultProps = {
  contributions: []
};
