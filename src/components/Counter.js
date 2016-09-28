import React, { PropTypes } from 'react';

export const Counter = ({ value, increment, decrement, index }) => {
  return (
  <div>
    <h1>{value}</h1>
    <button onClick={() => increment(index)}>+</button>
    <button onClick={() => decrement(index)}>-</button>
  </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}
