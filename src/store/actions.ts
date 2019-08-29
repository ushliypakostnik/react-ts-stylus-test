import { Action, ActionCreator } from 'redux';

// Actions Types
////////////////////////////////////////////////////////////

export const SET_STEP = 'SET_STEP';
export const SET_FORM = 'SET_FORM';

// Action Creators
////////////////////////////////////////////////////////////

export const setStep : ActionCreator<Action> = (stepId) => {
  return {
    type: SET_STEP,
    stepId,
  };
};

export const setForm : ActionCreator<Action> = (key, value) => {
  return {
    type: SET_FORM,
    key,
    value,
  };
};
