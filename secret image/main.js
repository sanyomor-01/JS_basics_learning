const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-image');

console.log(imgElement)
console.log(buttonElement)
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
});