import "./style.scss";
import { BlockAuth } from "./component/Login/login";
import { App as Application } from "./App/App";
import { Button, Input } from "./component/index";
import { append, prepend, remove } from "./utils/append";
import { Component } from "./core/component";

const app = document.querySelector("body");

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

const profile = new Component({
  tagName: "div",
  className: "profile",
  textContent: "Name Profile",
})

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
      events: defineEvent({
        el: "Exit Profile",
        event: "click",
        eventFunc: () => {
          console.log("exit");
        },
      })
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
    click: toggleLogin,
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

function toggleLogin() {
  defaultBlock.classList.toggle("hidden");
  BlockAuth.classList.toggle("hidden");
  exitButton.classList.toggle("hidden");
}

prepend(app, App);
