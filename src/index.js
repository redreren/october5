// import css from "./css/style.css";
const body = document.querySelector("body");
const section = document.querySelector(".section");
const picture = document.querySelector("#wrapper-image");
const showBtn = document.querySelector("[data-action='show']");
const sectionTitle = document.querySelector(".section-title");
const mainList = document.querySelector(".main-list");
// const mainListItems = mainList.querySelector(".main-list-item");
const mainListItems = document.querySelectorAll(".main-list-item");
const mainListItems1 = document.getElementsByClassName("main-list-item");
const innerListTitle = document.querySelector(".main-list-item__title");
const eventsList = document.querySelector("#events");
const eventListItems = document.querySelectorAll("#events li");
const beautyImage = document.getElementById("beauty");
console.log(beautyImage);

// ------------------

// picture.setAttribute("width", "320px");
picture.width = "450";

const src = "https://picsum.photos/200/300";
const src1 = "https://picsum.photos/300/300";

showBtn.addEventListener("click", () => {
  //   picture.style.display = "none";
  //   picture.classList.toggle("wrapper-image");
  if (beautyImage.src === src) {
    beautyImage.src = src1;
  } else {
    beautyImage.src = src;
  }
});

sectionTitle.addEventListener("click", () => {
  //   sectionTitle.style.fontSize = "50px";
  //   sectionTitle.style.fontWeight = "900";
  //   sectionTitle.style.textAlign = "center";
  sectionTitle.classList.toggle("section-title");
});

// const methodsList = `<ul>
//                         <li>getElementByClassName</li>
//                         <li>getElementById</li>
//                         <li>querySelector</li>
//                         <li>querySelectorAll</li>
//                     </ul>`;

// console.log(mainList.firstElementChild);

// mainList.firstElementChild.innerHTML += methodsList;
// mainList.firstElementChild.insertAdjacentHTML("beforeend", methodsList);

const list = document.createElement("ul");
const item1 = document.createElement("li");
const item2 = document.createElement("li");
const item3 = document.createElement("li");
const item4 = document.createElement("li");
item1.textContent = "getElementByClassName";
item2.textContent = "getElementById";
item3.textContent = "querySelector";
item4.textContent = "querySelectorAll";

list.append(item1, item2, item3, item4);
console.log(list);
mainList.firstElementChild.appendChild(list);

console.dir(list);
console.log(list.children.length);

beautyImage.setAttribute("src", "https://picsum.photos/200/300");

// ---------------------
