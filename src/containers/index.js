import React from 'react';
import { connect } from 'react-redux';
import CounterGenerator from './CounterGenerator.js';
import { addCounter } from '../actions';

class App extends React.Component {
  render() {
    const { addCounter, counters } = this.props;
    return (
    <div>
      <div>
      {counters.map((index, value) => {
        return (
          <CounterGenerator
            key={index}
            index={value}
          />
        )
      })}
      </div>
        <div>
          <button onClick={() => addCounter()}>Add Counter</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counters: state.counterList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  addCounter: () => {
    dispatch(addCounter());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
