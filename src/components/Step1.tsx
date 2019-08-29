import React from 'react';

interface Props {
  ref1: React.Ref<HTMLInputElement>;
  ref2: React.Ref<HTMLInputElement>;
  handleChange1: React.ChangeEventHandler<HTMLInputElement>;
  handleChange2: React.ChangeEventHandler<HTMLInputElement>;
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
            ref={ this.props.ref1 }
            onChange={ this.props.handleChange1 }
          />
        </fieldset>
        <fieldset className="form__group">
          <label htmlFor="amount">Ammount</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount"
            ref={ this.props.ref2 }
            onChange={ this.props.handleChange2 }
          />
        </fieldset>
      </React.Fragment>
    );
  };
};

export default Step1;
