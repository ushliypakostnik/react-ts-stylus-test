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

export interface AnyObjectType {
  readonly [key: string] : any;
};

export interface StepFormType extends AnyObjectType {};

interface DownshiftType {
  readonly value: string;
  readonly color: string;
};

interface SelectType {
  readonly value: number;
  readonly label: string;
};

export interface ControlsType extends AnyObjectType {
  readonly downshift1: DownshiftType[];
  readonly select1: SelectType[];
  readonly select2: SelectType[];
};
