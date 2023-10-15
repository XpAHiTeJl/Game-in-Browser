import { Button, Input } from "../../component/index";
import { Component } from "../../core/component";

const BlockAuth_mail = new Input({
  className: "BlockAuth_mail",
  placeholder: "Mail",
});
const BlockAuth_password = new Input({
  className: "BlockAuth_password",
  placeholder: "Password",
  type: "password",
});
const BlockAuth_ShowIcon = new Button({
  className: "BlockAuth_ShowIcon",
  events: {
    click: HidePassword,
  },
});
const BlockAuth_Icon = new Button({
  className: "BlockAuth_Icon hidden",
  events: {
    click: HidePassword,
  },
});

export const BlockAuth = new Component({
  tagName: "div",
  className: "BlockAuth hidden",
  children: [
    BlockAuth_mail,
    BlockAuth_password,
    BlockAuth_ShowIcon,
    BlockAuth_Icon,
    new Button({
      className: "BlockAuth_send",
      textContent: "Send",
    }),
    new Button({
      className: "exitButton",
    }),
  ],
});

function HidePassword() {
  BlockAuth_Icon.classList.toggle("hidden");
  BlockAuth_ShowIcon.classList.toggle("hidden");

  if (BlockAuth_password.getAttribute("type") === "password") {
    BlockAuth_password.setAttribute("type", "text");
  } else {
    BlockAuth_password.setAttribute("type", "password");
  }
}
