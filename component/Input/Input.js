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
<<<<<<< HEAD
    this.input.className = "input";
=======
    this.input.className = className;
>>>>>>> 032978950b6b417ef3e7a90c485e838969881631
    this.input.placeholder = placeholder;

    return this.input;
  }
}
