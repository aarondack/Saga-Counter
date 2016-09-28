const initialState = {
  counterList: [],
  index: 0,
  time: {0: 0}
};

const counterApp = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TIME':
      return {
        ...state,
        time: {
          ...state.time,
          [action.index]: state.time[action.index] + 1
        }
      }
    case 'DECREASE_TIME':
      return {
        ...state,
        time: {
          ...state.time,
          [action.index]: state.time[action.index] - 1
        }
      }
    case 'ADD_COUNTER':
    const track = state.index++
    return {
      ...state,
      counterList: [...state.counterList, track],
      time: {
        ...state.time,
        [track]: 0
      }
    }
    default:
      return state;
  }
}

export default counterApp;
