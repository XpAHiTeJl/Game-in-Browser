import { Button, Input } from "../../component/index";
import { Component } from "../../core/component";

export const BlockRegister = new Component({
  tagName: "div",
  className: "BlockRegister hidden",
  children: [
    new Input({
      className: "BlockRegister_Nick",
      placeholder: "Nickname",
    }),
    new Input({
      className: "BlockRegister_mail",
      placeholder: "Mail",
    }),

    new Input({
      className: "BlockRegister_password",
      placeholder: "Password",
    }),
    new Button({
      className: "BlockRegister_send",
      textContent: "Send",
    }),
    new Button({
      className: "exitButton",
    }),
    new Button({
      className: "BlockRegister_ShowIcon",
      events: {
        click: HidePassword,
      },
    }),
    new Button({
      className: "BlockRegister_Icon hidden",
      events: {
        click: HidePassword,
      },
    }),
  ],
});

function HidePassword() {
  BlockRegister.children[5].classList.toggle("hidden");
  BlockRegister.children[6].classList.toggle("hidden");
}
