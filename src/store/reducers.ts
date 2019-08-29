import { Action } from 'redux';

import { INITIAL_STATE } from './constants';
import { StoreType } from './types';
import {
  SET_STEP,
  SET_FORM,
} from './actions';

const rootReducer = (state : StoreType, action: Action & any) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case SET_STEP:
      return Object.assign({}, state, {
        ...state,
        stepId: action.stepId,
      });
    case SET_FORM:
      const obj = Object.entries(state)[1][1];
      for (let key in obj) {
        if (key === action.key) obj[key] = action.value;
      }
      return Object.assign({}, state, {
        ...state,
        stepForm: obj,
      });
    default:
      return state;
  };
};

export default rootReducer;
