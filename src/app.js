/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuse = document.createElement("p");
  excuse.innerHTML =
    who[Math.floor(Math.random() * 4)] +
    " " +
    action[Math.floor(Math.random() * 4)] +
    " " +
    what[Math.floor(Math.random() * 4)] +
    " " +
    when[Math.floor(Math.random() * 4)];

  let container = document.getElementById("container");
  container.append(excuse);
};
