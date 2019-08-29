export interface StoreType {
  readonly rootReducer: {
    readonly stepId : number;
    readonly stepForm : StepFormType;
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

export interface StepFormType {
  readonly [key: string] : any;
};

