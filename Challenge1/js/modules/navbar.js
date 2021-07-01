"use strict";

export class Navbar {
  constructor({
    el = null,
    menuSelector = ".navbar__menu",
    activeClassName = "selected",
    activeIndex = 0,
  }) {
    this._el = el;
    this._menuSelector = menuSelector;
    this._activeClassName = activeClassName;
    this._activeIndex = activeIndex;
  }

  init() {
    if (!this._el) return;

    this.assignElements();
    this.attachEventHandlers();

    const initialLi = this._menu.querySelector(`li:nth-child(${this._activeIndex + 1})`);
    initialLi && initialLi.classList.add(this._activeClassName);
  }

  assignElements() {
    this._menu = this._el.querySelector(this._menuSelector) || null;
  }

  attachEventHandlers() {
    this._menu &&
      this._menu.addEventListener("click", this.onSelect.bind(this));
  }

  onSelect(e) {
    if (e.target.tagName != "A") return;

    const li = e.target.parentElement;
    const menuItems = [...this._menu.children] || null;

    if (!menuItems || li.classList.contains(this._activeClassName)) return;

    this._activeIndex = menuItems.indexOf(li);

    menuItems.forEach((el) => {
      el.classList.remove(this._activeClassName);
    });
    li.classList.add(this._activeClassName);
  }
}