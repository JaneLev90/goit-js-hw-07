import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

const createGalleryElement = () => galleryItems.map((element) =>
`<div class="gallery__item">
<a class="gallery__link" target="_blank" href="${element.original}">
  <img
    class="gallery__image"
    src="${element.preview}"
    data-source="${element.original}"
    alt="${element.description}"
  />
</a>
</div>`).join("");

galleryContainer.insertAdjacentHTML('beforeend', createGalleryElement());

galleryContainer.addEventListener('click', (event) =>{
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG'){
        return
    }
    basicLightbox.create(`<img src="${event.target.dataset.source}">`).show()
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape'){
        basicLightbox.close();
    }
})

// const onGallaryElementClick = (el) => {
//     if (el.target.classList.value !== 'gallery__image'){
//         return
//     }
//     el.target.parentNode.stopPropagation()
//     basicLightbox.create(`<img src="${el.target.dataset.source}">`).show()
// }

// galleryContainer.addEventListener('click', onGallaryElementClick);