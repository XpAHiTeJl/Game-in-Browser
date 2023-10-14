import "./style.scss";
import { BlockAuth } from "./component/Login/login";
import { BlockRegister } from "./component/Register/register";
import { App as Application } from "./App/App";
import { Button, Input } from "./component/index";
import { append, prepend, remove } from "./utils/append";
import { Component } from "./core/component";

const app = document.querySelector("body");

const footer = new Component({
  tagName: "div",
  className: "footer",
  textContent: "All rights reserved © 2023 |ヾ(≧▽≦*)o |",
});

const mainBlockAutorization = new Component({
  tagName: "div",
  className: "mainBlockAutorization",
  children: [
    new Component({
      tagName: "div",
      className: "BlockAutorization",
      children: [
        new Button({
          className: "Login",
          textContent: "Login",
          events: {
            click: toggleLogine,
          },
        }),
        new Button({
          className: "Register",
          textContent: "Register",
          events: {
            click: toggleRegister,
          },
        }),
      ],
    }),
    new Component({
      tagName: "div",
      className: "Profil",
      textContent: "Name Profile",
    }),
  ],
});

const mainBlockMenu = new Component({
  tagName: "div",
  className: "mainBlockMenu",
  children: [
    new Button({
      className: "New Game",
      textContent: "New Game",
    }),
    new Button({
      className: "Load Game",
      textContent: "Load Game",
    }),
    new Button({
      className: "Exit Profile",
      textContent: "Exit Profile",
    }),
  ],
});

const defaultBlock = new Component({
  tagName: "div",
  className: "defaultBlock",
  children: [mainBlockAutorization, mainBlockMenu],
});

const exitButton = new Button({
  className: "exitButton hidden",
  events: {
    click: toggleLogine,
  },
});
const exitButtonreg = new Button({
  className: "exitButtonReg hidden",
  events: {
    click: toggleRegister,
  },
});

const mainBlock = new Component({
  tagName: "div",
  className: "mainBlock",
  children: [defaultBlock, BlockAuth, BlockRegister, exitButton, exitButtonreg],
});

const App = new Application({
  tagName: "div",
  className: "app",
  children: [mainBlock, footer],
});

function toggleLogine() {
  BlockAuth.classList.toggle("hidden");
  defaultBlock.classList.toggle("hidden");
  exitButton.classList.toggle("hidden");
}
function toggleRegister() {
  BlockRegister.classList.toggle("hidden");
  defaultBlock.classList.toggle("hidden");
  exitButtonreg.classList.toggle("hidden");
}

prepend(app, App);
