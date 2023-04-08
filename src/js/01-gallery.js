// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');
createGallery(galleryItems);
function createGallery(galleryArr){
    const newGallery = galleryArr.map(({preview, original, description}) =>{
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
                />
            </a>
        </li>
    `;
    }).join('');
   
    galleryUl.innerHTML = newGallery;

}

const options = {   			
    captionsData: 'alt',
    captionDelay: 250	
};

const lightbox = new SimpleLightbox('.gallery a', options);