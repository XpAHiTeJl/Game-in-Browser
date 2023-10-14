import { Button, Input } from "../../component/index";
import { Component } from "../../core/component";

export const registerBlock = new Component({
    tagName: "div",
    className: "registerBlock hidden",
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