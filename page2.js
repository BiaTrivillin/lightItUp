let contador = -6;

const switchOne = document.querySelector('#switch-shadow1');
const switchTwo = document.querySelector('#switch-shadow2');
const switchThree = document.querySelector('#switch-shadow3');
const switchFour = document.querySelector('#switch-shadow4');
const switchFive = document.querySelector('#switch-shadow5');
const switchSix = document.querySelector('#switch-shadow6');

const windowOne = document.querySelector('#window__one');
const windowTwo = document.querySelector('#window__two');
const windowThree = document.querySelector('#window__three');
const windowFour = document.querySelector('#window__four');
const windowFive = document.querySelector('#window__five');
const windowSix = document.querySelector('#window__six');

const title = document.querySelector('#title');

const nextPageIcon = document.querySelector('#arrow')


function showWindowOne() {  
    title.style.display = 'none'
    
    if (windowOne.style.display === "block") {
        windowOne.style.display = "none";
    }
    else {
        windowOne.style.display = "block";
    }
    contador++;
}

function showWindowTwo() {
    
    title.style.display = 'none'
    
    if (windowTwo.style.display === "block") {
        windowTwo.style.display = "none";
    }
    else {
        windowTwo.style.display = "block";
    }
}

function showWindowThree() {
    
    title.style.display = 'none'
    
    if (windowThree.style.display === "block") {
        windowThree.style.display = "none";
    }
    else {
        windowThree.style.display = "block";
    }
}


function showWindowFour() {
    
    title.style.display = 'none'
    
    if (windowFour.style.display === "block") {
        windowFour.style.display = "none";
    }
    else {
        windowFour.style.display = "block";
    }
}

function showWindowFive() {
    
    title.style.display = 'none'
    
    if (windowFive.style.display === "block") {
        windowFive.style.display = "none";
    }
    else {
        windowFive.style.display = "block";
    }
}

function showWindowSix() {
    
    title.style.display = 'none'
    
    if (windowSix.style.display === "block") {
        windowSix.style.display = "none";
    }
    else {
        windowSix.style.display = "block";
    }
    nextPageIcon.style.display = "block";
}


console.log(contador)


