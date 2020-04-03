const block = document.querySelector('.block');
document.body.addEventListener('click',(ev)=>{
    block.style.transform = `translate(${ev.x - 50}px, ${ev.y-50}px)`;
});
document.body.addEventListener('mousemove',()=>{
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor(){
    return `rgb(${getRandomInt(1,255)},${getRandomInt(1,255)},${getRandomInt(1,255)})`
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Включно з мінімальним та виключаючи максимальне значення 
  
  }
