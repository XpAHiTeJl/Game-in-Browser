import { Button, Input } from "../../component/index";
import { Component } from "../../core/component";

const BlockRegister_password = new Input({
  className: "BlockRegister_password",
  placeholder: "Password",
  type: "password",
});
const BlockRegister_Nick = new Input({
  className: "BlockRegister_Nick",
  placeholder: "Nickname",
});
const BlockRegister_mail = new Input({
  className: "BlockRegister_mail",
  placeholder: "Mail",
});

const BlockRegister_ShowIcon = new Button({
  className: "BlockRegister_ShowIcon",
  events: {
    click: HidePassword,
  },
});
const BlockRegister_Icon = new Button({
  className: "BlockRegister_Icon hidden",
  events: {
    click: HidePassword,
  },
});

export const BlockRegister = new Component({
  tagName: "div",
  className: "BlockRegister hidden",
  children: [
    BlockRegister_Nick,
    BlockRegister_Icon,
    BlockRegister_ShowIcon,
    BlockRegister_mail,
    BlockRegister_password,

    new Button({
      className: "BlockRegister_send",
      textContent: "Send",
    }),
    new Button({
      className: "exitButton",
    }),
  ],
});

function HidePassword() {
  BlockRegister_Icon.classList.toggle("hidden");
  BlockRegister_ShowIcon.classList.toggle("hidden");

  if (BlockRegister_password.getAttribute("type") === "password") {
    BlockRegister_password.setAttribute("type", "text");
  } else {
    BlockRegister_password.setAttribute("type", "password");
  }
}
