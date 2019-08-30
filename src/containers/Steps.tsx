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
  private refName : null | HTMLInputElement = null;
  private refAmmount : null | HTMLInputElement = null;
  private refOptions : null | HTMLInputElement = null;
  private refCash : null | HTMLInputElement = null;
  private refDescription : null | HTMLTextAreaElement = null;
  private refDelivery : null | HTMLInputElement = null;

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    stepForm: nextProps.stepForm,
  });

  readonly state : State = initialState;

  public componentDidMount() {
    if (this.refName) this.refName.value = this.props.stepForm.name;
    if (this.refAmmount) this.refAmmount.value = String(this.props.stepForm.ammount);
    if (this.refOptions) initRadios(this.refOptions, this.props.stepForm.options);
    if (this.refCash) initCheckbox(this.refCash, this.props.stepForm.cash);
    if (this.refDescription) this.refDescription.value = this.props.stepForm.description;
    if (this.refDelivery) initCheckbox(this.refDelivery, this.props.stepForm.delivery);
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

  // Common handle change for redux
  private handleChange = (key: string, value: any) : void => {
    this.props.setForm(key, value);
    this.checkDelivery();
  };

  private handleChangeName = () => {
    this.handleChange(Object.keys(FORM)[0], this.refName.value);
  };
  private handleChangeAmmount = () => {
    this.handleChange(Object.keys(FORM)[1], Number(this.refAmmount.value));
  };
  private handleChangeOptions = () => {
    const value = this.refOptions.getAttribute('data-value');
    if (value && value !== '') this.handleChange(Object.keys(FORM)[2], value);
  };
  private handleChangeCash = (e) => {
    const value = this.refCash.parentElement.parentElement.getAttribute('data-value');
    const _value = value === 'true' ? true : false;
    this.handleChange(Object.keys(FORM)[3], _value);
  };
  private handleChangeColor = (color) => {
    this.handleChange(Object.keys(FORM)[4], color);
  };
  private handleChangeHeight = (height) => {
    this.handleChange(Object.keys(FORM)[5], height);
  };
  private handleChangeDescription = () => {
    this.handleChange(Object.keys(FORM)[6], this.refDescription.value);
  };
  private handleChangeWidth = (width) => {
    this.handleChange(Object.keys(FORM)[7], width);
  };
  private handleChangeDelivery = (e) => {
    const value = this.refDelivery.parentElement.parentElement.getAttribute('data-value');
    const _value = value === 'true' ? true : false;
    this.handleChange(Object.keys(FORM)[8], _value);
  };

  public render() {
    const { stepId, stepForm } = this.props;

    return (
      <React.Fragment>
        {stepId === STEPS[0].id &&
          <Step1
            handleChangeName={ this.handleChangeName }
            handleChangeAmmount={ this.handleChangeAmmount }
            handleChangeOptions={ this.handleChangeOptions }
            handleChangeCash={ this.handleChangeCash }
            refName={ refName => (this.refName = refName) }
            refAmmount={ refAmmount => (this.refAmmount = refAmmount) }
            refOptions={ refOptions => (this.refOptions = refOptions) }
            refCash={ refCash => (this.refCash = refCash) }
          />}
        {stepId === STEPS[1].id &&
          <Step2
            handleChangeColor={ this.handleChangeColor }
            handleChangeHeight={ this.handleChangeHeight }
            initialDownshift1Value={ this.props.stepForm.color }
            initialSelect1Value={this.props.stepForm.height }
          />}
        {stepId === STEPS[2].id &&
          <Step3
            handleChangeDescription={ this.handleChangeDescription }
            handleChangeWidth={ this.handleChangeWidth }
            handleChangeDelivery={ this.handleChangeDelivery }
            refDescription={ refDescription => (this.refDescription = refDescription) }
            refDelivery={ refDelivery => (this.refDelivery = refDelivery) }
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
