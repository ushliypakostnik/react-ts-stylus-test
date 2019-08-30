import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  RouteProps,
} from "react-router-dom";

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { STEPS } from '../store/constants';
import { setStep } from '../store/actions';

import StepForm from './StepForm';
import Page404 from '../components/Page404';

// Redirect on first step of form from index route of app
const IndexRoute : React.SFC<RouteProps & any> = props => {
  props.setStep(STEPS[0].id);
  return <Redirect to={ STEPS[0].path } />
}

interface DispatchProps {
  setStep : (stepId: number) => void;
}

class App extends React.Component<DispatchProps> {

  public render() {
    return (
      <div className="page">
        <Switch>
          <IndexRoute exact path="/" setStep={ this.props.setStep } />
          {STEPS.map((page, index) => {
            return <Route
                     exact
                     key={index}
                     path={ page.path }
                     component={ StepForm } />;
          })}
          <Route path="*" component={ Page404 } />
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch : Dispatch) : DispatchProps => ({
  setStep: (stepId : number) => dispatch(setStep(stepId)),
});

export default connect(null, mapDispatchToProps)(App);
