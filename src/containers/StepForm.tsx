import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { STEPS, CONTROLS } from '../store/constants';
import { StoreType } from '../store/types';
import { history } from '../store/store';
import { setStep } from '../store/actions';

import Steps from './Steps';

interface StateToProps {
  stepId : number;
  color: string;
};

interface DispatchProps {
  setStep : (stepId: number) => void;
}

interface Props extends StateToProps, DispatchProps {
};

const initialState = {
};

type State = Readonly<typeof initialState>;

class StepForm extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    stepId: nextProps.stepId,
    color: nextProps.color,
  });

  readonly state : State = initialState;

  // Connecting native browser navigation
  public componentDidMount() {
    history.listen((location: any) : void => {
      const step = STEPS.filter(step => step.path === location.pathname);
      const stepId = step[0].id;
      if (stepId !== this.props.stepId) this.props.setStep(stepId);
    });
  };

  private goStep = (value: number) : void => {
    history.push(STEPS[value - 1].path);
  };

  public render() {
    const { stepId, color } = this.props;
    const _color = color !== '' ? CONTROLS.downshift1.filter(item => item.value === color)[0].color : '#ffffff';
    const style = (_color !== '' && stepId === STEPS[2].id) ? { background: _color } : { background: '#ffffff'};

    return (
      <form className="form" style={ style }>
        <h3>{stepId === STEPS.length ?
              STEPS[STEPS.length - 1].name :
              `Step ${STEPS[stepId - 1].name}`}</h3>

        <Steps stepId={ stepId } />

        {stepId !== STEPS[0].id &&
          <button
            type="button"
            role="button"
            className="form__prev-button"
            onClick={(e) => {
            e.preventDefault();
              this.goStep(stepId - 1);
            }}
          >{`Back ${STEPS[stepId - 2].name}`}</button>}
        {stepId !== STEPS.length &&
          <button
            type="button"
            role="button"
            className="form__next-button"
            onClick={(e) => {
              e.preventDefault();
              this.goStep(stepId + 1);
            }}
          >
            {stepId === STEPS.length - 1 ?
              STEPS[STEPS.length - 1].name :
              `Next ${STEPS[stepId].id}`}
          </button>}
      </form>
    );
  }
};

const mapStateToProps = (state : StoreType) : StateToProps => ({
  stepId: state.rootReducer.stepId,
  color: state.rootReducer.stepForm.control5,
});

const mapDispatchToProps = (dispatch : Dispatch) : DispatchProps => ({
  setStep: (stepId : number) => dispatch(setStep(stepId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepForm);
