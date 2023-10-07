import { append, appendMany } from "../utils/append";
import { defineEvent } from "../utils/defineEvent";
import { isArray } from "../utils/isArray";
import { render } from "./render";

export class Component {
  constructor({
    tagName,
    className,
    textContent,
    html,
    children,
    events,
    ...attrs
  }) {
    if (!tagName) return;
    this.tagName = tagName;
    this.className = className;
    if (textContent) this.textContent = textContent;
    this.html = html;
    this.children = children;
    if (events) this.events = events;
    this.attrs = attrs;

    const element = document.createElement(this.tagName);
    if (this.className) element.className = this.className;
    if (this.textContent) element.textContent = this.textContent;
    if (this.html) element.insertAdjacentHTML(html.position, html.htmlText);

    if (this.children) {
      for (const child of this.children) {
        append(element, child);
      }
    }
    if (this.attrs) {
      for (const attr in this.attrs) {
        const value = this.attrs[attr];

        element[attr] = value;
      }
    }

    if (!this.events) return element;

    for (const event in events) {
      this.addEventListener(event, events[event]);
    }
    // for (const event of this.events) {
    //   for (const keyOfEvent in event) {
    //     defineEvent({
    //       el: element,
    //       event: keyOfEvent,
    //       eventFunc: event[keyOfEvent],
    //     });
    //   }
    // }

    return element;
  }
}
