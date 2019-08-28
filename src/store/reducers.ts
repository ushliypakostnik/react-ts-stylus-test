import { Action } from 'redux';

import { INITIAL_STATE } from './constants';
import { StoreType } from './types';
import { SET_STEP } from './actions';

const rootReducer = (state : StoreType, action: Action & any) => {
  if (typeof state === 'undefined') {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case SET_STEP:
      return Object.assign({}, state, {
        stepForm: {
          stepId: action.stepId,
        }
      });
    default:
      return state;
  };
};

export default rootReducer;
