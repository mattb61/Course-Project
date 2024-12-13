"use strict";

const $ = selector => document.querySelector(selector);

let score = sessionStorage.getItem("score");
console.log(score);
let scoreDisplay = document.getElementById("scoreDisplay");
scoreDisplay.textContent = score;