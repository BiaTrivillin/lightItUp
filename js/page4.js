const imageContainer = document.querySelector('.face__container');
const buttonMinus = document.querySelector('.button__minus');
let contadorSmall = 0, contadorBig = 0, largSmall;
const arrow = document.querySelector('#arrow')

arrow.onclick = () => {
    window.location.href = 'index.html'
}

function gettingSmall() {
    contadorSmall += 30;
    largSmall = 600 - contadorSmall;

    imageContainer.style.width = `${largSmall}px`;

    if (contadorSmall === 420) {
        buttonMinus.disabled = true;
        buttonMinus.style.display = 'none';
        
        document.querySelector('#light').style.display = 'block';
        document.querySelector('#minus__icon').style.display = 'none';
        arrow.style.display = 'block';
    }
}


