import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    gallery: document.querySelector(".gallery"),
}
const images = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item"> 
   <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}).join("")

refs.gallery.insertAdjacentHTML("beforeend", images);

refs.gallery.addEventListener("click", (event) => {
    event.preventDefault();
    const source = event.target.dataset.source;
    const instance = basicLightbox.create(
        `<img width="1280" src="${source}">`)
    instance.show();
    
    refs.gallery.addEventListener("keydown", (event) => {
        if (event.keyCode === 27) {
            instance.close();
        }
    })
})



