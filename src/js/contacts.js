import css from "../css/contacts.css";
import contactsRef from "./refs.js";
const { contactsSection } = contactsRef;

const game = ["rock", "paper", "scissors"];

function createButtons(arr) {
  return arr.map((el) => {
    const button = document.createElement("button");
    button.textContent = el;
    button.dataset.key = el;
    return button;
  });
}

const buttons = createButtons(game);
contactsSection.append(...buttons);

let index = Math.round(Math.random() * (game.length - 1));
const result = document.createElement("p");
contactsSection.append(result);

contactsSection.addEventListener("click", (evt) => {
  let user = evt.target.dataset.key;
  let computer = game[index];
  console.log(`User: ${user} - Computer: ${computer}`);

  let msg;
  if (user === computer) {
    msg = "Tied score!";
  } else {
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock") ||
    (user === "rock" && computer === "scissors")
      ? (msg = "User wins =)")
      : (msg = "Computer wins =(");
  }
  result.textContent = msg;
});
