import { createStore } from 'redux';

// Define initial state
const initialState = {
  count: 0,
};

// Define reducer function
export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state, // Copy existing state
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state, // Copy existing state
        count: state.count - 1,
      };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(reducer);

export default store;
