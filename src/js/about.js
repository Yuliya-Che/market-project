import { comment, list } from "postcss";
import css from "../css/about.css";
import myImaginaryAutoPark from "../data/items.js";

import aboutRefs from "./refs.js";
const { aboutSection } = aboutRefs;
// console.log(aboutSection);

function createCarsList(arr) {
  // console.log(arr);
  return arr.map((car) => {
    const { name, picture, price } = car;
    const imgName = document.createElement("h3");
    imgName.textContent = name;

    const imgWrapper = document.createElement("div");

    const pictures = picture.map((pic) => {
      const img = document.createElement("img");
      img.setAttribute("src", pic);
      img.setAttribute("alt", name);
      img.setAttribute("width", "200px");
      return img;
    });
    imgWrapper.append(...pictures);
    console.log(imgWrapper);

    const carPrice = document.createElement("p");
    carPrice.textContent = price;

    const item = document.createElement("li");
    item.append(imgName, imgWrapper, carPrice);
    return item;
  });
}

const carsItems = createCarsList(myImaginaryAutoPark);
console.log(carsItems);

const carsList = document.createElement("ul");
carsList.append(...carsItems);
console.log(carsList);

aboutSection.append(carsList);
