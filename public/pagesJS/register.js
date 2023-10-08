import "../../style.scss";
import { App as Application } from "../../App/App";
import { Button, Input } from "../../component/index";
import { append, prepend } from "../../utils/append";
import { Component } from "../../core/component";
import { render } from "../../core/render";

export const inputsAndSubmit = new Component({
    tagName: "div",
    className: "inputsAndSubmit",
    children: [
      new Input({
        className: "login",
        placeholder: "Create your login"
      }),
      new Input({
        className: "email",
        placeholder: "Enter your email"
      }),
      new Input({
        className: "password",
        placeholder: "Create your password"
      }),
      new Input({
        className: "repeat-password",
        placeholder: "Repeat your password"
      }),
      new Button({
        className: "submit",
        textContent: "Submit",
      })
    ]
  });

