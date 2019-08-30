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

export interface StepFormType {
  readonly name : string;
  readonly ammount : number | null;
  readonly options: string | null;
  readonly cash: boolean;
  readonly color: string;
  readonly height: number | null;
  readonly description: string;
  readonly width: number | null;
  readonly delivery: boolean | null;
}

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
