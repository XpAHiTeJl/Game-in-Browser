import { Component } from "../../core/component";
import "./Button.scss";

export class Button extends Component {
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

    this.button = document.createElement(tagName ? tagName : "button");
    this.button.textContent = textContent ? textContent : "";

    return this.button;
  }
}
