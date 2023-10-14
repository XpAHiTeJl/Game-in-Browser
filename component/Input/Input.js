import { Component } from "../../core/component";

import "./Input.scss";

export class Input extends Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    events,
    placeholder,
    type,
    ...attrs
  }) {
    super({
      tagName,
      className,
      textContent,
      html,
      children,
      events,
      placeholder,
      type,
      ...attrs,
    });

    this.input = document.createElement("input");
    this.input.className = className;
    this.input.placeholder = placeholder;
    this.input.type = type;

    return this.input;
  }
}
