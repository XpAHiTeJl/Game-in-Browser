import { Button, Input } from "../../component/index";
import { Component } from "../../core/component";
import "../../style.scss";

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

export const BlockRegister_ShowIcon = new Button({
  className: "BlockRegister_ShowIcon",
  events: {
    click: HidePassword,
  },
});
export const BlockRegister_Icon = new Button({
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

// const BlockRegister_mailValue = BlockRegister_mail.value.trim();

BlockRegister_Nick.addEventListener("keyup", (e) => {
  if (e.target.value.length < 3) {
    BlockRegister_Nick.classList.add("styleRed");
    BlockRegister_Nick.classList.remove("styleGreen");
  } else {
    BlockRegister_Nick.classList.add("styleGreen");
    BlockRegister_Nick.classList.remove("styleRed");
  }
});

BlockRegister_password.addEventListener("keyup", (e) => {
  if (e.target.value.length < 6) {
    BlockRegister_password.classList.add("styleRed");
    BlockRegister_password.classList.remove("styleGreen");
  } else {
    BlockRegister_password.classList.add("styleGreen");
    BlockRegister_password.classList.remove("styleRed");
  }
});

BlockRegister_mail.addEventListener("blur", () => {
  if (BlockRegister_mail.value.includes("@" && ".")) {
    BlockRegister_mail.classList.add("styleGreen");
    BlockRegister_mail.classList.remove("styleRed");
  } else {
    alert("Почта должна содержать '@' и '.' ");
    BlockRegister_mail.classList.remove("styleGreen");
    BlockRegister_mail.classList.add("styleRed");
  }
});

BlockRegister.children[5].addEventListener("click", () => {
  if (
    BlockRegister_Nick.classList.contains("styleGreen") &&
    BlockRegister_mail.classList.contains("styleGreen") &&
    BlockRegister_password.classList.contains("styleGreen")
  ) {
    console.log("asdqwe");
  }
});
