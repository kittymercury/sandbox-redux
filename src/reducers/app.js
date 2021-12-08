import * as Types from '../actions/types';
import initialState from './initialState';

export default (state = initialState.app, action) => {
  switch (action.type) {
    case Types.RUN_ACTION:
      return { ...state, currentAction: action.payload };
  }

  return state;
}
