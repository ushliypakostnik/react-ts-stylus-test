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

import {
  initRadios,
  initCheckbox,
} from '../utilities/_helpers';

import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

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
  private ref1 : null | HTMLInputElement = null;
  private ref2 : null | HTMLInputElement = null;
  private ref3 : null | HTMLInputElement = null;
  private ref4 : null | HTMLInputElement = null;
  private ref5 : null | HTMLTextAreaElement = null;

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    stepForm: nextProps.stepForm,
  });

  readonly state : State = initialState;

  public componentDidMount() {
    if (this.ref1) this.ref1.value = this.props.stepForm.control1;
    if (this.ref2) this.ref2.value = this.props.stepForm.control2;
    if (this.ref3) initRadios(this.ref3, this.props.stepForm.control3);
    if (this.ref4) initCheckbox(this.ref4, this.props.stepForm.control4);
    if (this.ref5) this.ref5.value = this.props.stepForm.control7;
  };

  private handleChange = (key: string, value: any) : void => {
    this.props.setForm(key, value);
  };

  private handleChange1 = () => {
    this.handleChange(Object.keys(FORM)[0], this.ref1.value);
  };
  private handleChange2 = () => {
    this.handleChange(Object.keys(FORM)[1], this.ref2.value);
  };
  private handleChange3 = () => {
    const value = this.ref3.getAttribute('data-value');
    if (value && value !== '') this.handleChange(Object.keys(FORM)[2], value);
  };
  private handleChange4 = (e) => {
    const value = this.ref4.parentElement.parentElement.getAttribute('data-value');
    const _value = value === 'true' ? true : false;
    this.handleChange(Object.keys(FORM)[3], _value);
  };
  private handleChange5 = (color) => {
    this.handleChange(Object.keys(FORM)[4], color);
  };
  private handleChange6 = (height) => {
    this.handleChange(Object.keys(FORM)[5], height);
  };
  private handleChange7 = () => {
    this.handleChange(Object.keys(FORM)[6], this.ref5.value);
  };
  private handleChange8 = (width) => {
    this.handleChange(Object.keys(FORM)[7], width);
  };

  public render() {
    const { stepId } = this.props;

    return (
      <React.Fragment>
        {stepId === STEPS[0].id &&
          <Step1
            handleChange1={ this.handleChange1 }
            handleChange2={ this.handleChange2 }
            handleChange3={ this.handleChange3 }
            handleChange4={ this.handleChange4 }
            ref1={ ref1 => (this.ref1 = ref1) }
            ref2={ ref2 => (this.ref2 = ref2) }
            ref3={ ref3 => (this.ref3 = ref3) }
            ref4={ ref4 => (this.ref4 = ref4) }
          />}
        {stepId === STEPS[1].id &&
          <Step2
            handleChange5={ this.handleChange5 }
            handleChange6={ this.handleChange6 }
            initialDownshift1Value={ this.props.stepForm.control5 }
            initialSelect1Value={this.props.stepForm.control6 }
          />}
        {stepId === STEPS[2].id &&
          <Step3
            handleChange7={ this.handleChange7 }
            handleChange8={ this.handleChange8 }
            ref5={ ref5 => (this.ref5 = ref5) }
            initialSelect2Value={this.props.stepForm.control8 }
            delivery={ true }
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
