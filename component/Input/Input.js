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
    ...attrs
  }) {
    super({
      tagName,
      className,
      textContent,
      html,
      children,
      events,
      ...attrs,
    });

    this.input = document.createElement("input");
    this.input.className = "input";

    return this.input;
  }
}
