import React from 'react';
import numeral from 'numeral';

export default function dollars(props) {
  return (
    <span className={`dollar ${props.className}`}>
      {numeral(props.value).format('$0,0.00')}
    </span>
  );
}

dollars.propTypes = {
  value: React.PropTypes.number.isRequired,
  className: React.PropTypes.string
};

dollars.defaultProps = {
  className: ''
};
