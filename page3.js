const shadow = document.querySelector('#shadow');
const titleOne = document.querySelector('.title__one')
// const titleTwo = document.querySelector('.title__two')
const door = document.querySelector('#door')
const arrow = document.querySelector('#arrow')

function isGettingBig() {
    titleOne.style.display = 'none'
    door.style.display = 'none'
    shadow.style.cursor = "default"
    shadow.animate(
        [
            { transform: 'scale(10)'},
        ],

        {
            duration: 5000,
            iterations: 1,
            fill: "forwards",
        },
    )

    arrow.style.display = "block";
}


