import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createMarkup(galleryItems);
function createMarkup() {
  return galleryItems.reduce((acc, { preview, original, description }) => {
    acc += `<a 
    class="gallery__item" 
    href="${original}">
  <img 
  class="gallery__image" 
  src="${preview}" 
  alt="${description}" 
  title="${description}"
  />
</a>`;
    return acc;
  }, "");
}
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery__item", {
  captionDelay: 250,
  fadeSpeed: 250,
});
