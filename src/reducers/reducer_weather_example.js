import { FETCH_WEATHER } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.push(action.payload.data); // DONT MUTATE
      // return state.concat([action.payload.data]); // we do this to NOT mutate our state (ES5)
      return [ action.payload.data, ...state]; // or alternatively (ES6 syntax)
  }
  return state;
}