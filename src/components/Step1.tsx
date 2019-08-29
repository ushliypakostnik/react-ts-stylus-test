import React from 'react';

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
            onKeyDown={(e) => {
              const value = (e.target as HTMLInputElement).value;
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
              const element = (e.target as Element);
              const value = element.getAttribute('value');
              const parent = element.parentElement;
              const childrens = parent.children;
              const arr = [];
              for (let child in childrens) {
                if (typeof(childrens[child]) === 'object' &&
                  childrens[child].getAttribute('type') === 'radio') {
                  arr.push(childrens[child]);
                }
              }
              arr.forEach(el => {
                el.removeAttribute('checked');
              });
              if (element.getAttribute('checked') === 'checked') {
                element.removeAttribute('checked');
              } else {
                element.setAttribute('checked', 'checked');
              }
              if (value) {
                parent.setAttribute('data-value', value);
              }
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
                  const element = (e.target as Element);
                  let value;
                  if (element.getAttribute('checked') === 'checked') {
                    element.removeAttribute('checked');
                    value = false;
                  } else {
                    element.setAttribute('checked', 'checked');
                    value = true;
                  }
                  const parent = element.parentElement.parentElement;
                  parent.setAttribute('data-value', value);
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
