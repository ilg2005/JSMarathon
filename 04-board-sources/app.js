const board = document.querySelector('#board');
const colors = ['#cb4f19', '#7940ed', '#63a66f', '#e2ab10', '#e422a4', '#9198aa', '#a5748a', '#c8e733'];
const SQUARES_NUMBER = 400;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);

    square.addEventListener('mouseover', setColor);

    square.addEventListener('mouseleave', removeColor);


}

function setColor (evt) {
    const color = getRandomColor();
    const element = evt.target;
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor (evt) {
    const element = evt.target;
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
