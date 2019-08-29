import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {
  StoreType,
  StepFormType
} from '../store/types';
import {
  STEPS,
  FORM
} from '../store/constants';

import { setForm } from '../store/actions';

import Step1 from '../components/Step1';

interface StateToProps {
  stepForm : StepFormType;
};

interface DispatchProps {
  setForm? : (value1: string, value2: string) => void;
}

interface Props extends DispatchProps, StateToProps {
  stepId: number,
};

const initialState = {
};

type State = Readonly<typeof initialState>;

class StepForm extends React.Component<Props, State> {
  private ref1: null | HTMLInputElement = null;
  private ref2: null | HTMLInputElement = null;

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    stepForm: nextProps.stepForm,
  });

  readonly state : State = initialState;

  public componentDidMount() {
    if (this.ref1) this.ref1.value = this.props.stepForm.control1;
    if (this.ref2) this.ref2.value = this.props.stepForm.control2;
  };

  private handleChange = (key: string, value: string) : void => {
    this.props.setForm(key, value);
  };

  private handleChange1 = () => {
    this.handleChange(Object.keys(FORM)[0], this.ref1.value);
  };
  private handleChange2 = () => {
    this.handleChange(Object.keys(FORM)[1], this.ref2.value);
  };

  public render() {
    const { stepId } = this.props;

    return (
      <React.Fragment>
        {stepId === STEPS[0].id &&
          <Step1
            handleChange1={ this.handleChange1 }
            handleChange2={ this.handleChange2 }
            ref1={ ref1 => (this.ref1 = ref1) }
            ref2={ ref2 => (this.ref2 = ref2) }
          />}
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  stepForm: state.rootReducer.stepForm,
});

const mapDispatchToProps = (dispatch : Dispatch) : DispatchProps => ({
  setForm: (key : string, value : string) => dispatch(setForm(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepForm);
