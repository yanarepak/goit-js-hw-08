// Add imports above this line
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector(".gallery");


const createGallery =  galleryItems
.map(({preview, original, description}) => 
{
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
})
.join("");

galleryEl.insertAdjacentHTML("afterbegin", createGallery);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

console.log(galleryItems);
