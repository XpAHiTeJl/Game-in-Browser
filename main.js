import "./style.scss";
import { BlockAuth } from "./public/pagesJS/login";
import { App as Application } from "./App/App";
import { Button, Input } from "./component/index";
import { append, prepend, remove } from "./utils/append";
import { Component } from "./core/component";
import { render } from "./core/render";
import { defineEvent } from "./utils/defineEvent";

const app = document.querySelector("body");
let isMainBlockVisible = true;

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

const mainBlock = new Component({
  tagName: "div",
  className: "mainBlock",
  children: [defaultBlock, BlockAuth, exitButton],
});

const App = new Application({
  tagName: "div",
  className: "app",
  children: [mainBlock, footer],
});

function toggleLogine() {
  if (isMainBlockVisible) {
    defaultBlock.className = defaultBlock.className.concat(" ", "hidden");
    BlockAuth.className = BlockAuth.className.replace(" hidden", "");
    exitButton.className = exitButton.className.replace(" hidden", "");
  } else {
    defaultBlock.className = defaultBlock.className.replace(" hidden", "");
    BlockAuth.className = BlockAuth.className.concat(" ", "hidden");
    exitButton.className = exitButton.className.concat(" ", "hidden");
  }
  isMainBlockVisible = !isMainBlockVisible;
}

prepend(app, App);
