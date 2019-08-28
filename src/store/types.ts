export interface StoreType {
  readonly rootReducer: {
    readonly stepForm: {
      stepId: number;
      step1: {
        control1: string;
      };
      step2: {
        control1: string;
      };
      step3: {
        control1: string;
      };
      total: {};
    }
  };
  readonly router? : any;
};

export interface StepType {
  readonly id : number;
  readonly name : string;
  readonly path : string;
};

export interface LocalType {
  readonly [key: string] : string;
};

