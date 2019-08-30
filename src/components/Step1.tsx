import React from 'react';

import {
  onClickCheckbox,
  onClickRadios,
} from '../utilities/_helpers';

interface Props {
  refName : React.Ref<HTMLInputElement>;
  refAmmount : React.Ref<HTMLInputElement>;
  refOptions : React.Ref<HTMLInputElement>;
  refCash : React.Ref<HTMLInputElement>;
  handleChangeName : React.ChangeEventHandler<HTMLInputElement>;
  handleChangeAmmount : React.ChangeEventHandler<HTMLInputElement>;
  handleChangeOptions : React.ChangeEventHandler<HTMLInputElement>;
  handleChangeCash : React.MouseEventHandler<HTMLInputElement>;
};

class Step1 extends React.Component<Props> {

  public render() {
    return (
      <React.Fragment>
        <fieldset className="form__group">
          <label htmlFor="name">Product name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter product name"
            ref={ this.props.refName }
            onChange={ this.props.handleChangeName }
          />
        </fieldset>
        <fieldset className="form__group">
          <label htmlFor="amount">Ammount</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount"
            ref={ this.props.refAmmount }
            onChange={ this.props.handleChangeAmmount }
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
            ref={ this.props.refOptions }
            onChange={ this.props.handleChangeOptions }
            onClick={(e) => { onClickRadios(e); }}
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
          <div className="form__checkbox">
            <label
              htmlFor="cash"
            >Payment</label>
            <div>
              <input
                type="checkbox"
                id="cash"
                ref={ this.props.refCash }
                onClick={(e) => {
                  onClickCheckbox(e);
                  this.props.handleChangeCash(e);
                }}
              /><span>Cash payment ?</span>
            </div>
          </div>
        </fieldset>
      </React.Fragment>
    );
  };
};

export default Step1;
