const imageContainer = document.querySelector('.face__container');
const buttonMinus = document.querySelector('.button__minus');
let contadorSmall = 0, contadorBig = 0, largSmall;

function gettingSmall() {
    contadorSmall += 30;
    largSmall = 600 - contadorSmall;

    imageContainer.style.width = `${largSmall}px`;

    if (contadorSmall === 420) {
        buttonMinus.disabled = true;
        buttonMinus.style.display = 'none';
        
        document.querySelector('#light').style.display = 'block';
        document.querySelector('#minus__icon').style.display = 'none';
        document.querySelector('#arrow').style.display = 'block';
    }
}


