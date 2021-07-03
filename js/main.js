"use strict";

import Navbar from "./modules/navbar.js";

window.addEventListener("load", () => {
  const navbar = new Navbar(1, 2, 3);
  navbar.init();
});
