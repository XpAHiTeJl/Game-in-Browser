import "./style.scss";
<<<<<<< HEAD
import { inputsAndSubmit } from "./public/pagesJS/register";
=======
import { BlockAuth } from "./component/Login/login";
>>>>>>> 032978950b6b417ef3e7a90c485e838969881631
import { App as Application } from "./App/App";
import { Button, Input } from "./component/index";
import { append, prepend, remove } from "./utils/append";
import { Component } from "./core/component";
<<<<<<< HEAD
import { render } from "./core/render";
import { defineEvent } from "./utils/defineEvent";
=======
>>>>>>> 032978950b6b417ef3e7a90c485e838969881631

const app = document.querySelector("body");

const mainBlockAutorization = new Component({
  tagName: "div",
  className: "mainBlockAutorization",
  children: [
<<<<<<< HEAD
    new Button({
      className: "Login",
      textContent: "Login",
    }),
    new Button({
      className: "Register",
      textContent: "Register",
    })
=======
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
>>>>>>> 032978950b6b417ef3e7a90c485e838969881631
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
    click: toggleLogine,
  },
});

const mainBlock = new Component({
  tagName: "div",
  className: "mainBlock",
<<<<<<< HEAD
  children: [mainBlockAutorization, profile, mainBlockMenu, inputsAndSubmit]
});

const footer = new Component({
  tagName: "div",
  className: "footer",
  textContent: "All rights reserved © 2023 |ヾ(≧▽≦*)o |",
=======
  children: [defaultBlock, BlockAuth, exitButton],
>>>>>>> 032978950b6b417ef3e7a90c485e838969881631
});

const App = new Application({
  tagName: "div",
  className: "app",
  children: [mainBlock, footer],
});

function toggleLogine() {
  defaultBlock.classList.toggle("hidden");
  BlockAuth.classList.toggle("hidden");
  exitButton.classList.toggle("hidden");
}

prepend(app, App);
