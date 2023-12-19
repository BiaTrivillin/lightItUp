const buttonStart = document.querySelector('#button__start');
const lightShadow = document.querySelector('#light');
const arrow = document.querySelector('#arrow');

arrow.onclick = () => {
    window.location.href = 'page2.html'
}

function lightItUp() {
    lightShadow.style.display = 'block';
    buttonStart.style.display = 'none';
    arrow.style.display = 'block';
}


