import {
  StoreType,
  StepType,
  StepFormType,
  LocalType,
} from './types';

export const STEPS : StepType[] = [
  {
    id: 1,
    name: '1',
    path: '/step1',
  },
  {
    id: 2,
    name: '2',
    path: '/step2',
  },
  {
    id: 3,
    name: '3',
    path: '/step3',
  },
  {
    id: 4,
    name: 'Total',
    path: '/total',
  },
];

export const FORM : StepFormType = {
  control1: '',
  control2: '',
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
}
