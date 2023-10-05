import "./style.scss";
import { App as Application } from "./App/App";
import { Button, Input } from "./component/index";
import { append, prepend } from "./utils/append";
import { Component } from "./core/component";
import { render } from "./core/render";

const app = document.querySelector("body");

const buttonsAutoriz = [
  {
    textContent: "Login",
  },
  {
    textContent: "Register",
  },
].map((btn) => {
  return new Button({
    tagName: "button",
    className: "btn",
    textContent: btn.textContent,
  });
});

const App = new Application({
  tagName: "div",
  className: "app",
  children: [...buttonsAutoriz],
}).toHTML();

prepend(app, App);
