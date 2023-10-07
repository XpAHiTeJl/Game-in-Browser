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
}).toHTML();
// Отображение звука
// const buttonMainVolume = [
//   {
//     textContent: "",
//   },
//   {
//     textContent: "",
//     className: "volumMenu",
//   },
// ].map((btn) => {
//   return new Button({
//     tagName: "button",
//     className: "btn",
//     textContent: btn.textContent,
//   });
// });
const buttonMainVolume = new Component({
  tagName: "button",
  className: "MainVolume",
}).toHTML();

const mainBlockVolume = new Component({
  tagName: "div",
  className: "mainBlockVolume",
}).toHTML();
append(mainBlockVolume, buttonMainVolume);
// Вкладки в главно меню ( новая игра, загрузить игру...)
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
// Лоигн и Пароль в главном меню
const buttonsAutorizationBlock = [
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

const mainBlockProfil = new Component({
  tagName: "div",
  className: "mainBlockProfil",
  textContent: "Name Profile",
}).toHTML();
const buttonsBlockWrapper = new Component({
  tagName: "div",
  className: "buttonsBlockWrapper",
  children: [...buttonsAutorizationBlock],
}).toHTML();
// Основные блоки, меню и авторизации
const mainBlockmenu = new Component({
  tagName: "div",
  className: "mainBlockMenu",
  children: [...buttonsMainMenu],
}).toHTML();
const mainBlockAutorization = new Component({
  tagName: "div",
  className: "mainBlockAutorization",
  children: [buttonsBlockWrapper, mainBlockProfil],
}).toHTML();
// ---
const mainBlock = new Component({
  tagName: "div",
  className: "mainBlock",
  children: [mainBlockAutorization, mainBlockmenu, mainBlockVolume],
}).toHTML();

const App = new Application({
  tagName: "div",
  className: "app",
  children: [mainBlock, footer],
}).toHTML();

prepend(app, App);
