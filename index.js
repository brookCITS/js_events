console.log("script loaded");
const btn = document.querySelector("button");
const panel = document.getElementById("app");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  panel.style.backgroundColor = rndCol;
  console.log("Button clicked");
});

/**
 * 
 
const buttons = document.querySelectorAll("h4");
console.log(buttons); //an array of items

function changeButton(e) {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  e.target.style.color = "white";
}

buttons.forEach(function (button) {
  button.addEventListener("click", changeButton);
});
*/
