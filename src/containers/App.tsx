import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";

import { connect } from 'react-redux';
import { StoreType } from '../store/types';

import { STEPS } from '../store/constants';

import StepForm from './StepForm';
import Page404 from '../components/Page404';

const Index : React.SFC = () => {
  return <Redirect to={ STEPS[0].path } />
}

interface Props {
};

const initialState = {
};

type State = Readonly<typeof initialState>;

class App extends React.Component<Props, State> {

  public static getDerivedStateFromProps = (nextProps : Props, prevState : State) => ({
  });

  readonly state : State = initialState;

  public render() {
    return (
      <div className="page">
        <Switch>
          <Route exact path="/" component={ Index } />
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

const mapStateToProps = (state : StoreType) : State => ({
});

export default connect(null, null)(App);
