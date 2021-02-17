/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let sArriba = document.getElementById("sArriba");
  let num = document.getElementById("num");
  let sAbajo = document.getElementById("sAbajo");

  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let simbolos = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let opcion = Math.floor(Math.random() * 4);

  if (opcion == 0 || opcion == 1) {
    sArriba.style.color = "black";
    sAbajo.style.color = "black";
    num.style.color = "black";
    sArriba.innerHTML = simbolos[opcion];
    sAbajo.innerHTML = simbolos[opcion];
    num.innerHTML = numeros[Math.floor(Math.random() * 13)];
  } else {
    sArriba.style.color = "red";
    sAbajo.style.color = "red";
    num.style.color = "red";
    sArriba.innerHTML = simbolos[opcion];
    sAbajo.innerHTML = simbolos[opcion];
    num.innerHTML = numeros[Math.floor(Math.random() * 13)];
  }
};
