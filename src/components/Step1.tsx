import React from 'react';

import {
  onClickCheckbox,
  onClickRadios,
} from '../utilities/_helpers';

import InputText from './elements/InputText';

interface Props {
  ref1 : React.Ref<HTMLInputElement>;
  ref2 : React.Ref<HTMLInputElement>;
  ref3 : React.Ref<HTMLInputElement>;
  ref4 : React.Ref<HTMLInputElement>;
  handleChange1 : React.ChangeEventHandler<HTMLInputElement>;
  handleChange2 : React.ChangeEventHandler<HTMLInputElement>;
  handleChange3 : React.ChangeEventHandler<HTMLInputElement>;
  handleChange4 : React.MouseEventHandler<HTMLInputElement>;
};

class Step1 extends React.Component<Props> {
  private refLink1 : null | HTMLInputElement = null;

  public render() {
    return (
      <React.Fragment>
        <InputText
            label="Product name"
            id="name"
            placeholder="Enter product name"
            refLink={ refLink1 => (this.refLink = refLink1) }
            handleChange={ this.props.handleChange1 }
        />
        <fieldset className="form__group">
          <label htmlFor="amount">Ammount</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount"
            ref={ this.props.ref2 }
            onChange={ this.props.handleChange2 }
            onKeyDown={(e) => {
              if (['e', '+', '-'].includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </fieldset>
        <fieldset className="form__group">
          <label htmlFor="options">Options</label>
          <div
            id="options"
            className="form__radios"
            ref={ this.props.ref3 }
            onChange={ this.props.handleChange3 }
            onClick={(e) => {
               onClickRadios(e);
            }}
          >
            <label htmlFor="option1">A</label>
            <input type="radio" id="option1"
                   name="option" value="A" />
            <label htmlFor="option2">B</label>
            <input type="radio" id="option2"
                   name="option" value="B" />
            <label htmlFor="option3">C</label>
            <input type="radio" id="option3"
                   name="option" value="C" />
          </div>
        </fieldset>
        <fieldset className="form__group">
          <div
            className="form__checkbox"
          >
            <label
              htmlFor="cash"
            >Payment</label>
            <div>
              <input
                type="checkbox"
                id="cash"
                ref={ this.props.ref4 }
                onClick={(e) => {
                  onClickCheckbox(e);
                  this.props.handleChange4(e);
                }}
              /><span>Cash payment ???</span>
            </div>
          </div>
        </fieldset>
      </React.Fragment>
    );
  };
};

export default Step1;
