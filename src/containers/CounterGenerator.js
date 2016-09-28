import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTime, decrementTime } from '../actions';
import { Counter } from '../components/Counter';

class CounterGenerator extends Component {

  render() {
    const { time, increment, decrement, index } = this.props;
    return (
      <Counter
        value={time[index]}
        increment={increment}
        decrement={decrement}
        index={index}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (index) => {
      dispatch(addTime(index))
    },
    decrement: (index) => {
      dispatch(decrementTime(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterGenerator);
