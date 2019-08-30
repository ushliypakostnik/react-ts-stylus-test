import {
  StoreType,
  StepType,
  StepFormType,
  LocalType,
  ControlsType,
} from './types';

export const STEPS : StepType[] = [
  { id: 1, name: '1', path: '/step1', },
  { id: 2, name: '2', path: '/step2', },
  { id: 3, name: '3', path: '/step3', },
  { id: 4, name: 'Total', path: '/total', },
];

export const FORM : StepFormType = {
  control1: '',
  control2: '',
  control3: '',
  control4: false,
  control5: '',
  control6: null,
};

export const INITIAL_STATE : StoreType = {
  rootReducer: {
    stepId: STEPS[0].id,
    stepForm: {
      ...FORM,
    },
  },
};

export const LOCAL : LocalType = {
  stepForm: 'stepForm',
};

export const CONTROLS : ControlsType = {
 downshift1: [
    { value: 'red', color: '#ffa9b2', },
    { value: 'blue', color: '#93eaff', },
    { value: 'green', color: '#6eff96', },
    { value: 'orange', color: '#ffdf94', },
    { value: 'white', color: '#f9f9f9', },
  ],
  select1: [
    { value: 2, label: '2m', },
    { value: 3, label: '3m', },
    { value: 6, label: '6m', }
  ],
};
