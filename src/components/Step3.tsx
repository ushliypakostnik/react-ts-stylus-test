import React from 'react';
import Select from 'react-select';

import { CONTROLS } from '../store/constants';
import {
  onClickCheckbox,
  initCheckbox,
} from '../utilities/_helpers';

interface Props {
  refDescription : React.Ref<HTMLTextAreaElement>;
  refDelivery : React.Ref<HTMLInputElement>;
  initialSelect2Value: number;
  handleChangeDescription : React.ChangeEventHandler<HTMLTextAreaElement>;
  handleChangeWidth : React.ChangeEventHandler<HTMLInputElement>;
  handleChangeDelivery : React.MouseEventHandler<HTMLInputElement>;
  delivery: boolean;
  deliveryFromStore: boolean;
};

class Step3 extends React.Component<Props> {
  private refWrap : React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);

    this.refWrap = React.createRef();
  }

  public componentDidUpdate() {
    if (this.refWrap.current) {
      const checkbox = this.refWrap.current.children[0] as HTMLInputElement;
      initCheckbox(checkbox, this.props.deliveryFromStore);
    }
  }

  public render() {
    const { initialSelect2Value, delivery } = this.props;
    const _initialSelectValue = CONTROLS.select2.filter(option => option.value === initialSelect2Value)[0];

    return (
      <React.Fragment>
        <fieldset className="form__group">
          <label htmlFor="name">Product description</label>
          <textarea
            id="description"
            placeholder="Enter product description"
            ref={ this.props.refDescription }
            onChange={ this.props.handleChangeDescription }
          ></textarea>
        </fieldset>
        <fieldset className="form__group">
          <label htmlFor="width">Product width</label>
          <Select
            id="width"
            placeholder="Select width"
            options={ CONTROLS.select2 }
            className='react-select-container'
            classNamePrefix="react-select"
            isSearchable={false}
            defaultValue={ _initialSelectValue }
            onChange={selection => {
              this.props.handleChangeWidth(selection.value);
            }}
          />
        </fieldset>
        {delivery &&
          <fieldset className="form__group">
            <div className="form__checkbox">
              <label
                htmlFor="delivery"
              >Delivery</label>
              <div ref={ this.refWrap }>
                <input
                  type="checkbox"
                  id="delivery"
                  ref={ this.props.refDelivery }
                  onClick={(e) => {
                    onClickCheckbox(e);
                    this.props.handleChangeDelivery(e);
                  }}
                /><span>Need delivery ?</span>
              </div>
            </div>
          </fieldset>}
      </React.Fragment>
    );
  };
};

export default Step3;
