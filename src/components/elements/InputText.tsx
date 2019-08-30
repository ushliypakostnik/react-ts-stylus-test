import React from 'react';

interface Props {
  label : string;
  id : string;
  placeholder : string;
  refLink : React.Ref<HTMLInputElement>;
  handleChange : React.ChangeEventHandler<HTMLInputElement>;
};

class InputText extends React.Component<Props> {

  public render() {
    return (
      <fieldset className="form__group">
        <label htmlFor={ this.props.id }>{ this.props.label }</label>
        <input
          id={ this.props.id }
          type="text"
          placeholder={ this.props.placeholder }
          ref={ this.props.refLink }
          onChange={ this.props.handleChange }
        />
      </fieldset>
    );
  };
};

export default InputText;
