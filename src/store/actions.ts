import { Action, ActionCreator } from 'redux';

// Actions Types
////////////////////////////////////////////////////////////

export const SET_STEP = 'SET_STEP';

// Action Creators
////////////////////////////////////////////////////////////

export const setStep : ActionCreator<Action> = (stepId) => {
  return {
    type: SET_STEP,
    stepId,
  };
};
