/** @format */

"use strict";

const body = document.querySelector("body");
const hamburger = document.querySelector(".hamburger-icon");
const hamburgerClose = document.querySelector(".hamburger-close-icon");
const navbar = document.querySelector(".navbar-1");

hamburger.addEventListener("click", () => {
  navbar.style.transform = "translateX(0%)";
});

hamburgerClose.addEventListener("click", (e) => {
  navbar.style.transform = "translateX(-100%)";
});
