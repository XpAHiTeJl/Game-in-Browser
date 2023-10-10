import "../pagesSCSS/login.scss";
import { App as Application } from "../../App/App";
import { Button, Input } from "../../component/index";
import { append, prepend } from "../../utils/append";
import { Component } from "../../core/component";
import { render } from "../../core/render";

export const BlockAuth = new Component({
  tagName: "div",
  className: "BlockAuth hidden",
  children: [
    new Input({
      className: "BlockAuth_mail",
      placeholder: "Почта",
    }),
    new Input({
      className: "BlockAuth_password",
      placeholder: "Пароль",
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
