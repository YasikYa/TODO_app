import React from "react";
import { DeleteButton } from "./DeleteButton";

export class TodoElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  daysToEnd() {
    return Math.round(
      (this.props.action.deadline - Date.now()) / 1000 / 60 / 60 / 24
    );
  }

  handleDelete() {
    this.props.deleteElement(this.props.action.title);
  }

  render() {
    return (
      <div className="todo-element">
        <label>{this.props.action.title}</label>
        <label>Days to complete: {this.daysToEnd()}</label>
        <DeleteButton delete={this.handleDelete} />
      </div>
    );
  }
}
