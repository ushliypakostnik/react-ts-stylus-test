import React from 'react';
import Downshift from 'downshift';
import Select from 'react-select';

import { CONTROLS } from '../store/constants';

interface Props {
  initialDownshift1Value : string;
  initialSelect1Value : number;
  handleChangeColor : React.ChangeEventHandler<HTMLElement>;
  handleChangeHeight : React.ChangeEventHandler<HTMLElement>;
};

class Step2 extends React.Component<Props> {

  public render() {
    const { initialSelect1Value } = this.props;
    const _initialSelectValue = CONTROLS.select1.filter(option => option.value === initialSelect1Value)[0];

    return (
      <React.Fragment>
        <fieldset className="form__group form__downshift">
          <Downshift
              onChange={selection => {
                this.props.handleChangeColor(selection.value);
              }}
              itemToString={item => (item ? item.value : '') }
              initialInputValue={ this.props.initialDownshift1Value }
            >
              {({
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
              }) => (
                <div>
                  <label
                    htmlFor="color"
                    {...getLabelProps()}
                  >Enter a color</label>
                  <input
                    id="color"
                    placeholder="Select color"
                    {...getInputProps()}
                  />
                  <ul {...getMenuProps()}>
                    {isOpen
                      ? CONTROLS.downshift1
                          .filter(item => !inputValue || item.value.includes(inputValue))
                          .map((item, index) => (
                            <li
                              {...getItemProps({
                                key: item.value,
                                index,
                                item,
                                style: {
                                  backgroundColor:
                                    highlightedIndex === index ? item.color : 'white',
                                  fontWeight: 'normal',
                                  padding: '8px 10px'
                                },
                              })}
                            >
                              {item.value}
                            </li>
                          ))
                      : null}
                  </ul>
                </div>
              )}
          </Downshift>
        </fieldset>
        <fieldset className="form__group">
          <label htmlFor="height">Product height</label>
          <Select
            id="height"
            placeholder="Select height"
            options={ CONTROLS.select1 }
            className='react-select-container'
            classNamePrefix="react-select"
            isSearchable={false}
            defaultValue={ _initialSelectValue }
            onChange={selection => {
              this.props.handleChangeHeight(selection.value);
            }}
          />
        </fieldset>
      </React.Fragment>
    );
  };
};

export default Step2;
