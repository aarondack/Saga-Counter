export const ADD_TIME = 'ADD_TIME';
export const DECREASE_TIME = 'DECREASE_TIME';
export const ADD_COUNTER = 'ADD_COUNTER';

export const addTime = (index) => {
  return {
    type: ADD_TIME,
    index
  }
}

export const decrementTime = (index) => {
  return {
    type: DECREASE_TIME,
    index
  }
}

export const addCounter = (index) => {
  return {
    type: ADD_COUNTER,
  }
}
