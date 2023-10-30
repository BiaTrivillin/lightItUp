const buttonStart = document.querySelector('#button__start');
const lightShadow = document.querySelector('#light');
const arrow = document.querySelector('#arrow');

function lightItUp() {
    lightShadow.style.display = 'block';
    buttonStart.style.display = 'none';
    arrow.style.display = 'block';
}
