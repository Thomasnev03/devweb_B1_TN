console.log('jeu démarré');
let gamezone = document.getElementById('gamezone');
let box = document.querySelector('.box');
//console.log(box);
let click = 0;
let scoreElement = document.querySelector('#score');

let chrono = 60;
let chronoElement = document.querySelector('#chrono');
chronoElement.innerHTML = chrono;

box.addEventListener("click", () => {
    //console.log('click sur la box !');
    click += 1;
    scoreElement.innerHTML = click;
    let randomLeft = Math.floor(Math.random() * (gamezone.clientWidth - box.clientWidth));
let randomTop = Math.floor(Math.random() * (gamezone.clientHeight - box.clientHeight));
box.style.left = randomLeft + 'px';
box.style.top = randomTop + 'px';
    //let top = Math.floor(Math.random() * window.innerHeight);
   // let left = Math.floor(Math.random() * window.innerWidth);
    //while (top <= 400)
    //box.style.top = "10px";
//box.styles.backgroundColor = "red";
 //  box.style.top = `${top}px`;
   //box.style.left = `${left}px`;


});

setInterval(() => {
    
   // console.log("timer"); 
   if (chrono != 0){
   chrono --;
   chronoElement.innerHTML = chrono;
   }  
    
}, 1000)
