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
      ...attrs,
    });

    this.input = document.createElement("input");
    this.input.className = className;
    this.input.placeholder = placeholder;

    return this.input;
  }
}
