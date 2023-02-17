import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const createGalleryElement = () => galleryItems.map((element) =>

`<a class="gallery__item" href="${element.original}">
<img 
class="gallery__image" 
src="${element.preview}" 
alt="${element.description}" 
data-source="${element.original}"
/>
</a>`).join("");

galleryContainer.insertAdjacentHTML('beforeend', createGalleryElement());

galleryContainer.addEventListener('click', (event) =>{
    event.preventDefault();
    
    if (event.target.nodeName !== 'IMG'){
        return
    }
    var lightBox = new SimpleLightbox('.gallery a', { 
        captionDelay: 250,
        captionsData: 'alt',
     });
     });