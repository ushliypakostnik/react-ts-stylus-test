import React from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreType } from '../store/types';

import { history } from '../store/store';

import { STEPS } from '../store/constants';

import { setStep } from '../store/actions';

interface StateToProps {
  stepId : number;
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
  private control1Ref: React.RefObject<HTMLInputElement>;

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
    stepId: nextProps.stepId,
  });

  constructor(props) {
    super(props);

    this.control1Ref = React.createRef();
  }

  readonly state : State = initialState;

  private goStep = (value: number) : void => {
    this.props.setStep(value);
    history.push(STEPS[value - 1].path);
  };

  public render() {
    const { stepId } = this.props;

    return (
      <form className="form">
        <input
          type="text"
          aria-label="input"
          placeholder="input value"
          ref={ this.control1Ref }
        />
        {stepId !== STEPS[0].id &&
          <button
            type="button"
            role="button"
            className="form__prev-button"
            onClick={(e) => {
            e.preventDefault();
              // this.submit(this.control1Ref.current.value);
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
              // this.submit(this.control1Ref.current.value);
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
  stepId: state.rootReducer.stepForm.stepId,
});

const mapDispatchToProps = (dispatch : Dispatch) : DispatchProps => ({
  setStep: (stepId : number) => dispatch(setStep(stepId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepForm);
