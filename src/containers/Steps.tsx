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
import Step4 from '../components/Step4';

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
  delivery: null,
};

type State = Readonly<typeof initialState>;

class StepForm extends React.Component<Props, State> {
  private ref1 : null | HTMLInputElement = null;
  private ref2 : null | HTMLInputElement = null;
  private ref3 : null | HTMLInputElement = null;
  private ref4 : null | HTMLInputElement = null;
  private ref5 : null | HTMLTextAreaElement = null;
  private ref6 : null | HTMLInputElement = null;

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    stepForm: nextProps.stepForm,
  });

  readonly state : State = initialState;

  public componentDidMount() {
    if (this.ref1) this.ref1.value = this.props.stepForm.name;
    if (this.ref2) this.ref2.value = String(this.props.stepForm.ammount);
    if (this.ref3) initRadios(this.ref3, this.props.stepForm.options);
    if (this.ref4) initCheckbox(this.ref4, this.props.stepForm.cash);
    if (this.ref5) this.ref5.value = this.props.stepForm.description;
    if (this.ref6) initCheckbox(this.ref6, this.props.stepForm.delivery);
    this.checkDelivery();
  };

  private checkDelivery = () : void => {
   if (this.props.stepForm.width === 4000 && this.props.stepForm.ammount > 5000) {
      this.setState({
        delivery: true,
      });
    } else {
      this.setState({
        delivery: false,
      });
    }
  };

  private handleChange = (key: string, value: any) : void => {
    this.props.setForm(key, value);
    this.checkDelivery();
  };

  private handleChange1 = () => {
    this.handleChange(Object.keys(FORM)[0], this.ref1.value);
  };
  private handleChange2 = () => {
    this.handleChange(Object.keys(FORM)[1], Number(this.ref2.value));
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
  private handleChange9 = (e) => {
    const value = this.ref6.parentElement.parentElement.getAttribute('data-value');
    const _value = value === 'true' ? true : false;
    this.handleChange(Object.keys(FORM)[8], _value);
  };

  public render() {
    const { stepId, stepForm } = this.props;

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
            initialDownshift1Value={ this.props.stepForm.color }
            initialSelect1Value={this.props.stepForm.height }
          />}
        {stepId === STEPS[2].id &&
          <Step3
            handleChange7={ this.handleChange7 }
            handleChange8={ this.handleChange8 }
            handleChange9={ this.handleChange9 }
            ref5={ ref5 => (this.ref5 = ref5) }
            ref6={ ref6 => (this.ref6 = ref6) }
            initialSelect2Value={this.props.stepForm.width }
            delivery={ this.state.delivery }
            deliveryFromStore={ this.props.stepForm.delivery }
          />}
         {stepId === STEPS[STEPS.length - 1].id &&
          <Step4
            stepForm={ stepForm }
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
