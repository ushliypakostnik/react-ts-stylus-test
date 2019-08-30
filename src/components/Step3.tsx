import React from 'react';

import Select from 'react-select';

import { CONTROLS } from '../store/constants';

interface Props {
  ref5 : React.Ref<HTMLTextAreaElement>;
  initialSelect2Value: number;
  handleChange7 : React.ChangeEventHandler<HTMLTextAreaElement>;
  handleChange8 : React.ChangeEventHandler<HTMLElement>;
  delivery: boolean;
};

class Step3 extends React.Component<Props> {

  public render() {
    const { initialSelect2Value } = this.props;
    const _initialSelectValue = CONTROLS.select2.filter(option => option.value === initialSelect2Value)[0];

    return (
      <React.Fragment>
        <fieldset className="form__group">
          <label htmlFor="name">Product description</label>
          <textarea
            id="description"
            placeholder="Enter product description"
            ref={ this.props.ref5 }
            onChange={ this.props.handleChange7 }
          ></textarea>
        </fieldset>
        <fieldset className="form__group">
          <Select
            placeholder="Select width"
            options={ CONTROLS.select2 }
            className='react-select-container'
            classNamePrefix="react-select"
            isSearchable={false}
            defaultValue={ _initialSelectValue }
            onChange={selection => {
              this.props.handleChange8(selection.value);
            }}
          />
        </fieldset>
      </React.Fragment>
    );
  };
};

export default Step3;
