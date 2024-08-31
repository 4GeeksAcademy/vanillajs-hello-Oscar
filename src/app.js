/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let result = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        result.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  var lista = document.getElementById("list");
  lista.innerHTML = result.map(dominio => {
    return `<li>${dominio}</li>`;
  });
  console.log(lista.innerHTML);
  //write your code here
  console.log("Hello Rigo from the console!");
};
