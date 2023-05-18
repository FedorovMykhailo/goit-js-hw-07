import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector(".gallery"),
}
const images = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
}).join("");

refs.gallery.insertAdjacentHTML("afterbegin", images);

const lightbox = new SimpleLightbox(".gallery li a", { captionsData: "alt", captionDelay : 250});

// refs.gallery.addEventListener("click",lightbox.open())
 lightbox.onclick(open());

