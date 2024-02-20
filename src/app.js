/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
var count_onload = 0;
window.onload = function() {
  //write your code here

  let element = document.querySelector(".p_number");
  let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let randomTest = Math.floor(Math.random() * newArray.length);
  element.innerHTML = newArray[randomTest];

  let elem = document.querySelectorAll(".p_suit");
  let arraySuit = ["&#9824;", "&#9827;", "&#9829;", "&#9830;"];
  let random2 = Math.floor(Math.random() * arraySuit.length);
  elem[0].innerHTML = arraySuit[random2];
  elem[1].innerHTML = arraySuit[random2];

  let random3 = Math.floor(Math.random() * 2);
  if (random3 == 1) {
    elem[0].style.color = "red";
    elem[1].style.color = "red";
    element.style.color = "red";
  } else {
    elem[0].style.color = "black";
    elem[1].style.color = "black";
    element.style.color = "black";
  }
};
