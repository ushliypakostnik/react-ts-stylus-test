import React from 'react';

import Downshift from 'downshift';

interface Props {
  ref5 : React.Ref<HTMLFieldSetElement>;
  handleChange5 : React.ChangeEventHandler<HTMLFieldSetElement>;
};

const items = [
  { value: 'red', color: '#ffa9b2' },
  { value: 'blue', color: '#93eaff'},
  { value: 'green', color: '#6eff96'},
  { value: 'orange', color: '#ffdf94'},
  { value: 'white', color: '#f9f9f9' },
]

class Step2 extends React.Component<Props> {

  public render() {
    return (
      <React.Fragment>
        <fieldset
          className="form__group form__downshift"
          ref={ this.props.ref5 }
        >
            <Downshift
                onChange={selection => {
                  console.log('Downshift', selection);
                  this.props.handleChange5(selection.color)
                }}
                itemToString={item => (item ? item.value : '') }
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
                      {...getInputProps()}
                    />
                    <ul {...getMenuProps()}>
                      {isOpen
                        ? items
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
      </React.Fragment>
    );
  };
};

export default Step2;
