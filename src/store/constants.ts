import {
  StoreType,
  StepType,
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

export const INITIAL_STATE : StoreType = {
  rootReducer: {
    stepForm: {
      stepId: STEPS[0].id,
      step1: {
        control1: '',
      },
      step2: {
        control1: '',
      },
      step3: {
        control1: '',
      },
      total: {}
    },
  },
};

export const LOCAL : LocalType = {
}
