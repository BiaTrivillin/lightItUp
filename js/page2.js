const title = document.querySelector('#title');

const btnsList = document.querySelectorAll('.switch');

const arrow = document.querySelector('#arrow');

arrow.onclick = () => {
    window.location.href = 'page4.html'
}

for (let i = 0; i < btnsList.length; i++) {
    
    const btn = btnsList[i];

    const window = document.querySelector(`#window__${btn.classList[1]}`);
    
    btn.onclick = () => {
        title.style.display = 'none';
        arrow.style.display = 'block';

        if (window.style.display === 'block') {
            window.style.display = 'none';
        }

        else {
            window.style.display = 'block';
        }
    }
}
