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
  private ref3: null | HTMLInputElement = null;
  private ref4: null | HTMLInputElement = null;

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    stepForm: nextProps.stepForm,
  });

  readonly state : State = initialState;

  public componentDidMount() {
    if (this.ref1) this.ref1.value = this.props.stepForm.control1;
    if (this.ref2) this.ref2.value = this.props.stepForm.control2;
    if (this.ref3) {
      const value = this.props.stepForm.control3;
      console.log(value);
      if (value && value !== '') {
        this.ref3.setAttribute('data-value', value);
        const childrens = this.ref3.children;
        const arr = [];
        for (let child in childrens) {
          if (typeof(childrens[child]) === 'object' &&
            childrens[child].getAttribute('type') === 'radio') {
            arr.push(childrens[child]);
          }
        }
        arr.forEach(el => {
          if (el.getAttribute('value') === value) {
            el.setAttribute('checked', 'checked');
          } else {
            el.removeAttribute('checked');
          }
        });
      }
    }
    if (this.ref4) {
      const value =  this.props.stepForm.control4;
      if (value) {
        this.ref4.setAttribute('checked', 'checked');
        this.ref4.parentElement.parentElement.setAttribute('data-value', 'true');
      } else {
        this.ref4.removeAttribute('checked');
        this.ref4.parentElement.parentElement.setAttribute('data-value', 'false');
      }
    }
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
