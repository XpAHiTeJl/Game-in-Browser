import { Button, Input } from "../../component/index";
import { Component } from "../../core/component";

export const BlockAuth = new Component({
  tagName: "div",
  className: "BlockAuth hidden",
  children: [
    new Input({
      className: "BlockAuth_mail",
      placeholder: "Mail",
    }),
    new Input({
      className: "BlockAuth_password",
      placeholder: "Password",
    }),
    new Button({
      className: "BlockAuth_send",
      textContent: "Send",
    }),
    new Button({
      className: "exitButton",
    }),
  ],
});
