const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','E','D','F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const colorh4 = document.querySelector('.color-h4')

btn.addEventListener('click', ()=>{

    let hexColor = '#';

    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }

    document.body.style.backgroundColor = hexColor
    color.textContent= hexColor;
    color.style.color = hexColor;
    colorh4.style.color = hexColor;
})


function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}