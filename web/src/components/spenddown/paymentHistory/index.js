import React from 'react';
import PaymentRow from './row';

function getPaymentKey(payment) {
  return `spenddown-payment-row | ${payment.amount} | ${payment.received} | ${payment.applied}`;
}

export default function paymentHistory(props) {
  return (
    <div className="gray box">
      <h3>Payments</h3>
      <table className="usa-table-borderless">
        <tbody>
          {props.payments.map(payment => <PaymentRow key={getPaymentKey(payment)} {...payment} />)}
        </tbody>
      </table>
    </div>
  );
}

paymentHistory.propTypes = {
  payments: React.PropTypes.arrayOf(React.PropTypes.shape(PaymentRow.propTypes))
};

paymentHistory.defaultProps = {
  payments: []
};
