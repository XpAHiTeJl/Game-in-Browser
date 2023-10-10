import "./style.scss";
import { inputsAndSubmit } from "./public/pagesJS/register";
import { App as Application } from "./App/App";
import { Button, Input } from "./component/index";
import { append, prepend } from "./utils/append";
import { Component } from "./core/component";
import { render } from "./core/render";
import { defineEvent } from "./utils/defineEvent";

const app = document.querySelector("body");

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
    })
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

const mainBlock = new Component({
  tagName: "div",
  className: "mainBlock",
  children: [mainBlockAutorization, profile, mainBlockMenu, inputsAndSubmit]
});

const footer = new Component({
  tagName: "div",
  className: "footer",
  textContent: "All rights reserved © 2023 |ヾ(≧▽≦*)o |",
});

const App = new Application({
  tagName: "div",
  className: "app",
  children: [mainBlock, footer],
});

prepend(app, App);
