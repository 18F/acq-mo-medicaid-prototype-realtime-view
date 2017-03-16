import React from 'react';

function getOtherMembers(people) {
  if (people) {
    return (
      <div>
        <h6>Other members</h6>
        {people.map(person => (<div key={`spenddown-person | ${person}`}>{person}</div>))}
      </div>
    );
  }
  return null;
}

export default function clientDetail(props) {
  return (
    <div className="client-detail box">
      <h1>Client details</h1>
      <h6>Primary individual</h6>
      <strong>{props.primary}</strong>

      {getOtherMembers(props.others)}

      <h6>Address</h6>
      {props.address.map(line => (<div key={`spenddown-address-line-${Math.random() * 100}`}>{line}</div>))}

      <h6>Phone</h6>
      {props.phone}
    </div>
  );
}

clientDetail.propTypes = {
  primary: React.PropTypes.string.isRequired,
  others: React.PropTypes.arrayOf(React.PropTypes.string),
  address: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  phone: React.PropTypes.string.isRequired
};
