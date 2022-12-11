import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createMarkup(galleryItems);
let galleryModalWindow;
galleryEl.addEventListener("click", onClick);

function createMarkup() {
  return galleryItems.reduce((acc, { preview, original, description }) => {
    acc += `<div class="gallery__item">
        <a class="gallery__link"
        href="${original}">
        <img
        class="gallery__image"
        data-source="${original}"
        src="${preview}" 
        alt="${description}">
        </a>
        </div>`;
    return acc;
  }, "");
}
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  galleryModalWindow = basicLightbox.create(`
<img
        src="${evt.target.dataset.source}" 
        alt="${this.description}">
 `);
  galleryModalWindow.show();
  document.addEventListener("keydown", onEscapeKeydown);
}

function onEscapeKeydown(evt) {
  if (evt.code !== "Escape") {
    return;
  }
  galleryModalWindow.close();
  document.removeEventListener("keydown", onEscapeKeydown);
}
