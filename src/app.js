/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello rigo from the console!");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "My fish", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the bread", "the fish tank"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was sleeping"
  ];

  let whoindx = Math.floor(Math.random() * who.length);
  let actionindx = Math.floor(Math.random() * action.length);
  let whatindx = Math.floor(Math.random() * what.length);
  let whenindx = Math.floor(Math.random() * when.length);
  return (
    who[whoindx] +
    " " +
    action[actionindx] +
    " " +
    what[whatindx] +
    " " +
    when[whenindx]
  );
};
