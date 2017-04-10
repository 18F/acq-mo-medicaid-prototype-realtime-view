import React from 'react';

import Dollars from '../../dollars';
import Date from '../../date';

export default function paymentHistoryRow(props) {
  return (
    <tr key={`spenddown-payment-row-${Math.random() * 100}`}>
      <td>
        <table className="payment-table">
          <tbody>
            <tr>
              <th scope="row">
                <h6>Date received</h6>
              </th>
              <td>
                <Date value={props.received} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <h6>Amount</h6>
              </th>
              <td>
                <Dollars value={props.amount} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <h6>Date applied</h6>
              </th>
              <td>
                <Date value={props.applied} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <h6>Applied to</h6>
              </th>
              <td>
                {props.month}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

paymentHistoryRow.propTypes = {
  amount: React.PropTypes.number.isRequired,
  received: React.PropTypes.number.isRequired,
  applied: React.PropTypes.number.isRequired,
  month: React.PropTypes.shape({
    start: React.PropTypes.number.isRequired,
    end: React.PropTypes.number.isRequired
  }).isRequired
};
