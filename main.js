import "./style.scss";
import { BlockAuth } from "./component/Login/login";
import {registerBlock} from "./component/Register/register"
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
            click: toggleLogin,
          },
        }),
        new Button({
          className: "Register",
          textContent: "Register",
          events: {
            click: toggleRegister
          }
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

const exitButtonLogin = new Button({
  className: "exitButton hidden",
  events: {
    click: toggleLogin,
  },
});

const exitButtonReg = new Button({
  className: "exitButton hidden",
  events: {
    click: toggleRegister,
  },
});

const mainBlock = new Component({
  tagName: "div",
  className: "mainBlock",
  children: [defaultBlock, BlockAuth, registerBlock, exitButtonReg, exitButtonLogin],
});

const App = new Application({
  tagName: "div",
  className: "app",
  children: [mainBlock, footer],
});

function toggleLogin() {
  defaultBlock.classList.toggle("hidden");
  BlockAuth.classList.toggle("hidden");
  exitButtonLogin.classList.toggle("hidden");
}

function toggleRegister() {
  defaultBlock.classList.toggle("hidden");
  registerBlock.classList.toggle("hidden");
  exitButtonReg.classList.toggle("hidden");
}

prepend(app, App);
