var htmlElm = document.querySelector('html');
var pElm = document.querySelector('p');
var imgElm = document.querySelector('img');

var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');
var imageForm = document.getElementById('image');

if(!localStorage.getItem('bgcolor')) {
    populateStorage();
}else{
    setStyles();
}

function populateStorage(){
    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
    localStorage.setItem('font',document.getElementById('font').value);
    localStorage.setItem('image', document.getElementById('image').value);

    setStyles();
}

function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');
    var currentFont = localStorage.getItem('font');
    var currentImage = localStorage.getItem('image');

    document.getElementById('bgcolor').value = currentColor;
    document.getElementById('font').value = currentFont;
    document.getElementById('image').value = currentImage;

    htmlElm.style.backgroundColor = '#' + currentColor;
    pElm.style.fontFamily = currentFont;
    imgElm.setAttribute('src', currentImage);
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage();
imageForm.onchange = populateStorage(); 