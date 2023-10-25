const buttonElement = document.getElementById('btn');
const pElement = document.getElementById('secret-p');

const toggleElement = (domElement) =>{
    if (domElement.style.display === 'none'){
        domElement.style.display = 'block';
    }
    else{
        domElement.style.display = 'none'
    }

}
buttonElement.addEventListener( 'click', () =>{toggleElement(pElement)})