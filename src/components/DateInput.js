import React from "react";

export class DateInput extends React.Component {
  render() {
    return (
      <div className="form-element input-field col s6">
        <label htmlFor={this.props.inputName}>{this.props.labelText}</label>
        <input type="date" name={this.props.inputName} onChange={this.props.onInput}></input>
      </div>
    );
  }
}
