"use strict";

const $ = (selector) => document.querySelector(selector);

const mainPage = () => {
    window.location.origin;
}

const pageSwap = () => {
    window.location.assign("FirstQuestion.html");
}

document.addEventListener("DOMContentLoaded", () => {
    $("#start_button").addEventListener("click", pageSwap)
});