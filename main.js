import "./style.scss";
import { App as Application } from "./App/App";
import { Button, Input } from "./component/index";
import { append, prepend } from "./utils/append";
import { Component } from "./core/component";
import { render } from "./core/render";

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
    new Button({
      className: "Login",
      textContent: "Login",
    }),
    new Button({
      className: "Register",
      textContent: "Register",
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

const mainBlock = new Component({
  tagName: "div",
  className: "mainBlock",
  children: [mainBlockAutorization, mainBlockMenu],
});

const App = new Application({
  tagName: "div",
  className: "app",
  children: [mainBlock, footer],
});

prepend(app, App);
