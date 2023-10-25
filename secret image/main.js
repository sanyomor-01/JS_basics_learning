import { toggleHiddenElement } from '../modules/dom-functions.js';
const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-image');



buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
});