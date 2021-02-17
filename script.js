const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const rootStyles = document.documentElement.style;


const changeColorStyle = (element, color) => {
    rootStyles.setProperty(`--${color}`, element.target.value);
}

const changeColor = (element, color) => {
    element.addEventListener('change', element => {
        changeColorStyle(element, color);
    });
    element.addEventListener('mousemove', element =>{
        changeColorStyle(element, color);
    });
}

changeColor(red, 'red');
changeColor(green, 'green');
changeColor(blue, 'blue');
