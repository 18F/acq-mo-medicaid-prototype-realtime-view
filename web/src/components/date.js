import React from 'react';

export default function date(props) {
  const d = new Date(props.value);
  const dateString = `${d.getUTCMonth() + 1}/${d.getUTCDate()}/${d.getUTCFullYear()}`;

  return (
    <span className={`date ${props.className}`}>{dateString}</span>
  );
}

date.propTypes = {
  value: React.PropTypes.number,
  className: React.PropTypes.string
};

date.defaultProps = {
  value: Date.now(),
  className: ''
};
