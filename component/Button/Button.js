import { Component } from "../../core/component";
import "./Button.scss";

export class Button extends Component {
  constructor({ className, children, textContent, events }) {
    super({
      tagName: "button",
      className,
      children,
      textContent,
      events,
    });
    return this;
  }
}
