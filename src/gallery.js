import gallery from "./SONY_WORLD_PHOTOGRAPHY_AWARDS.js";
// console.log(gallery);

const galleryList = document.querySelector(".photo-gallery");
const overlay = document.querySelector(".js-lightbox");
const overlayImage = document.querySelector(".lightbox__image");

const cart = gallery.map((el) => {
  console.log(el);
  //
  const title = document.createElement("h2");
  title.textContent = el.title;
  title.setAttribute("class", "title");
  //
  const picture = document.createElement("img");
  picture.setAttribute("src", el.image);
  picture.setAttribute("alt", el.category);
  picture.setAttribute("width", "450px");

  //
  const description = document.createElement("p");
  description.textContent = el.description;
  description.setAttribute("class", "description");

  //
  const subtitle = document.createElement("h3");
  subtitle.innerHTML = `<span>Категория: </span>${el.category}`;
  subtitle.setAttribute("class", "category");
  //
  const seria = document.createElement("p");
  seria.innerHTML = `<span>Серия: </span>${el.seria}`;
  seria.setAttribute("class", "seria");
  //
  const photographer = document.createElement("p");
  photographer.innerHTML = `<span>Фотограф: </span>${el.author.name}`;
  photographer.setAttribute("class", "photographer");
  //
  const country = document.createElement("p");
  country.innerHTML = `(${el.author.country}<span>  ${el.author.city}</span>)`;
  country.setAttribute("class", "country");
  //
  const galleryItem = document.createElement("li");
  galleryItem.setAttribute("class", "main-item");
  galleryItem.append(
    title,
    picture,
    description,
    subtitle,
    seria,
    photographer,
    country,
  );

  galleryList.append(galleryItem);
});

galleryList.addEventListener("click", (event) => {
  console.log(event.target.src);
  if (event.target.nodeName === "IMG") {
    overlay.classList.add("is-open");
    overlayImage.src = event.target.src;
  }
});

overlay.addEventListener("click", clearOverlay);

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    clearOverlay();
  }
});

function clearOverlay() {
  overlay.classList.remove("is-open");
  overlayImage.src = "";
}

// {
//     id: "1",
//         image: "https://www.dw.com/image/53739856_303.jpg",
//             title: "Раны Гонконга",
//                 seria: "Раны Гонконга",
//                     category: "Документальная фотография",
//                         description:
//     "Цикл портретов участников протестов против попыток центральной власти в Пекине окончательно прибрать к рукам Гонконг. Первое место.",
//         author: {
//         name: "Чунь Минь Ко",
//             country: "Китай",
//                 city: "Гонконг",
//     },
// },
