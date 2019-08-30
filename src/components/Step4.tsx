import React from 'react';

import { StepFormType } from '../store/types';
import { CONTROLS } from '../store/constants';

interface Props {
  stepForm : StepFormType;
};

class Step4 extends React.Component<Props> {

  public render() {
    const {
      name,
      ammount,
      options,
      cash,
      color,
      height,
      description,
      width,
      delivery,
    } = this.props.stepForm;

    const _height : string | null = height ? CONTROLS.select1.filter(option => option.value === height)[0].label : null;
    const _width : string | null = width ? CONTROLS.select2.filter(option => option.value === width)[0].label : null;

    return (
      <React.Fragment>
        <fieldset className="form__group">
          <label>Product name</label>
          <p>{ name !== '' ? name : '—' }</p>
        </fieldset>
        <fieldset className="form__group">
          <label>Ammount</label>
          <p>{ ammount ? ammount : '—' }</p>
        </fieldset>
        <fieldset className="form__group">
          <label>Options</label>
          <p>{ options !== '' ? options : '—' }</p>
        </fieldset>
        <fieldset className="form__group">
          <label>Payment</label>
          <p>{ cash ? 'Yes' : 'No' }</p>
        </fieldset>
        <fieldset className="form__group">
          <label>Color</label>
          <p>{ color !== '' ? color : '—' }</p>
        </fieldset>
        <fieldset className="form__group">
          <label>Height</label>
          <p>{ _height ? _height : '—' }</p>
        </fieldset>
        <fieldset className="form__group">
          <label>Width</label>
          <p>{ _width ? _width : '—' }</p>
        </fieldset>
        <fieldset className="form__group">
          <label>Description</label>
          <p>{ description !== '' ? description : '—' }</p>
        </fieldset>
        {ammount > 5000 &&
          <fieldset className="form__group">
            <label>Delivery</label>
            <p>{ delivery ? 'Yes' : 'No' }</p>
          </fieldset>}
      </React.Fragment>
    );
  };
};

export default Step4;
