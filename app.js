const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const colorh4 = document.querySelector('.color-h4')

btn.addEventListener('click', function () {

    //get random number between 0 - 3 colors[3]

    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent= colors[randomNumber];
    color.style.color= colors[randomNumber];
    colorh4.style.color = colors[randomNumber];
    console.log(colors[randomNumber]);
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}