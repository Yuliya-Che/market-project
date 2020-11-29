import css from "../css/home.css";

import refs from "./refs.js";
console.log(refs);
console.log(refs.homeSection);

// Деструктуризация объекта доступа
const { homeSection } = refs;
console.log(homeSection);

const homeTitle = `<h2 class="homeTitle">Home</h2>`;

homeSection.insertAdjacentHTML("afterbegin", homeTitle);

const homeContent = document.createElement("p");
const content =
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, esseratione explicabo totam repudiandae asperiores enim deserunt magni auteos deleniti iure sed, praesentium neque nesciunt minus ipsum veniam";
homeContent.textContent = content;

const title = document.querySelector(".homeTitle");
title.appendChild(homeContent);
