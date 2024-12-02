"use strict";

const $ = selector => document.querySelector(selector);

const scoreKeeper = () => {
    let score = 0;
}

const pageSwap = () => {
    self.location = ("FirstQuestion.html");
}

document.addEventListener("DOMContentLoaded", () => {
    $("#start").addEventListener("click", pageSwap);
    scoreKeeper();
});