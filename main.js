const block = document.querySelector('.block');
document.querySelector('body').addEventListener('click',(ev)=>{
    block.style.transform = `translate(${ev.x - 50}px, ${ev.y-50}px)`;
})
