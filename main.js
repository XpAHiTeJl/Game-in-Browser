import "./style.scss";
import { App as Application } from "./App/App";
import { Button, Input } from "./component/index";
import { append, prepend } from "./utils/append";
import { Component } from "./core/component";
import { render } from "./core/render";

const app = document.querySelector("body");

const buttonsFooter = [""].map(() => {
  return new Button({
    tagName: "div",
    className: "footer",
    textContent: "Footer",
  });
});
const buttonsMainBlock = [
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

const buttonsMainMenu = [
  {
    textContent: "New Game",
  },
  {
    textContent: "Load Game",
  },
  {
    textContent: "Exit Profile",
  },
  {
    textContent: "Exit Game",
  },
].map((btn) => {
  return new Button({
    tagName: "button",
    className: "btn",
    textContent: btn.textContent,
  });
});

const mainBlockmenu = new Component({
  tagName: "div",
  className: "mainBlockmenu",
  children: [...buttonsMainMenu],
}).toHTML();

const mainBlockProfil = new Component({
  tagName: "div",
  className: "mainBlockProfil",
  textContent: "Name Profile",
}).toHTML();

const mainBlockAutorization = new Component({
  tagName: "div",
  className: "mainBlockAutorization",
  children: [...buttonsMainBlock, mainBlockProfil],
}).toHTML();

const mainBlock = new Component({
  tagName: "div",
  className: "mainBlock",
  children: [mainBlockAutorization, mainBlockmenu],
}).toHTML();

const App = new Application({
  tagName: "div",
  className: "app",
  children: [mainBlock, ...buttonsFooter],
}).toHTML();

prepend(app, App);
